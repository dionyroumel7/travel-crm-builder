import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { oliveTrees, OliveTree } from "@/data/oliveTrees";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Leaf, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Custom icon for available trees
const availableTreeIcon = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2322c55e' width='32' height='32'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Custom icon for adopted trees
const adoptedTreeIcon = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8' width='32' height='32'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapRecenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

export const OliveTreeMap = () => {
  const [selectedTree, setSelectedTree] = useState<OliveTree | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleTreeClick = (tree: OliveTree) => {
    setSelectedTree(tree);
    setDialogOpen(true);
  };

  const handleAdopt = (tree: OliveTree) => {
    toast({
      title: "Adoption Request Received!",
      description: `Thank you for your interest in adopting "${tree.name}". We'll contact you shortly with adoption details.`,
    });
    setDialogOpen(false);
  };

  const center: [number, number] = [37.595, 22.422];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-4 left-4 right-4 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border">
        <h1 className="text-3xl font-bold mb-2">Livadaki Olive Grove</h1>
        <p className="text-muted-foreground">
          Arcadia, Greece • Click on any olive tree to learn more and adopt it for a year
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-sm">Available for Adoption</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-muted" />
            <span className="text-sm">Already Adopted</span>
          </div>
        </div>
      </div>

      <MapContainer
        // @ts-ignore
        center={center}
        zoom={16}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapRecenter center={center} />
        
        {oliveTrees.map((tree) => {
          const TreeMarker = Marker as any;
          return (
            <TreeMarker
              key={tree.id}
              position={tree.position}
              icon={tree.adopted ? adoptedTreeIcon : availableTreeIcon}
              eventHandlers={{
                click: () => handleTreeClick(tree),
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-lg">{tree.name}</h3>
                  <p className="text-sm text-muted-foreground">{tree.variety}</p>
                </div>
              </Popup>
            </TreeMarker>
          );
        })}
      </MapContainer>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedTree && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                  {selectedTree.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedTree.variety} • {selectedTree.age}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Livadaki Grove, Arcadia, Greece
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Story</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedTree.description}
                    </p>
                  </div>
                </div>

                {selectedTree.adopted ? (
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <Badge variant="secondary">Already Adopted</Badge>
                    </div>
                    <p className="text-sm">
                      <span className="font-semibold">Adopted by:</span>{" "}
                      {selectedTree.adoptedBy}
                    </p>
                    <p className="text-sm flex items-center gap-1 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">Until:</span>{" "}
                      {new Date(selectedTree.adoptionEndDate!).toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">
                      Available for Adoption
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Adopt this beautiful olive tree for one year and support sustainable
                      farming in Arcadia. You'll receive quarterly updates, photos, and a
                      bottle of olive oil from your tree's harvest.
                    </p>
                    <div className="flex gap-2">
                      <Button onClick={() => handleAdopt(selectedTree)} className="flex-1">
                        Adopt This Tree
                      </Button>
                      <Button variant="outline" onClick={() => setDialogOpen(false)}>
                        Maybe Later
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

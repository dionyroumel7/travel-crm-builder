import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, DollarSign, Plus, Clock } from "lucide-react";

interface Tour {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  maxCapacity: number;
  currentBookings: number;
  nextDeparture: string;
  category: "adventure" | "luxury" | "cultural" | "beach";
}

const mockTours: Tour[] = [
  {
    id: "T-001",
    name: "Bali Paradise",
    destination: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: "$2,250",
    maxCapacity: 30,
    currentBookings: 24,
    nextDeparture: "Nov 15, 2025",
    category: "beach",
  },
  {
    id: "T-002",
    name: "European Adventure",
    destination: "Paris, Rome, Barcelona",
    duration: "14 Days / 13 Nights",
    price: "$3,800",
    maxCapacity: 25,
    currentBookings: 18,
    nextDeparture: "Nov 22, 2025",
    category: "cultural",
  },
  {
    id: "T-003",
    name: "Dubai Luxury",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "$2,700",
    maxCapacity: 40,
    currentBookings: 32,
    nextDeparture: "Dec 1, 2025",
    category: "luxury",
  },
  {
    id: "T-004",
    name: "Japan Cultural Experience",
    destination: "Tokyo, Kyoto, Osaka",
    duration: "10 Days / 9 Nights",
    price: "$3,200",
    maxCapacity: 20,
    currentBookings: 15,
    nextDeparture: "Dec 8, 2025",
    category: "cultural",
  },
];

export const Tours = () => {
  const getCategoryBadge = (category: Tour["category"]) => {
    switch (category) {
      case "adventure":
        return <Badge variant="success">Adventure</Badge>;
      case "luxury":
        return <Badge variant="warning">Luxury</Badge>;
      case "cultural":
        return <Badge variant="info">Cultural</Badge>;
      case "beach":
        return <Badge>Beach</Badge>;
    }
  };

  const getAvailabilityStatus = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return { color: "text-destructive", text: "Almost Full" };
    if (percentage >= 70) return { color: "text-[hsl(var(--warning))]", text: "Filling Fast" };
    return { color: "text-[hsl(var(--success))]", text: "Available" };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tour Packages</h1>
          <p className="text-muted-foreground">Browse and manage tour offerings</p>
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4" />
          Add Tour
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockTours.map((tour) => {
          const availability = getAvailabilityStatus(tour.currentBookings, tour.maxCapacity);
          return (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                    {getCategoryBadge(tour.category)}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="text-2xl font-bold text-primary">{tour.price}</p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{tour.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Next: {tour.nextDeparture}</span>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {tour.currentBookings} / {tour.maxCapacity} booked
                      </span>
                    </div>
                    <span className={`text-sm font-semibold ${availability.color}`}>
                      {availability.text}
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(tour.currentBookings / tour.maxCapacity) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline">Edit</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

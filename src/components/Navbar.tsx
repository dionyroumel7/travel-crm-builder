import { Plane, Menu, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const navigate = useNavigate();
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "insights", label: "Insights" },
    { id: "customers", label: "Customers" },
    { id: "bookings", label: "Bookings" },
    { id: "tours", label: "Tours" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EPOS Travel Tours</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              onClick={() => onTabChange(item.id)}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            onClick={() => navigate("/olive-grove")}
            className="flex items-center gap-2"
          >
            <TreeDeciduous className="w-4 h-4" />
            Olive Grove
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => onTabChange(item.id)}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() => navigate("/olive-grove")}
                className="justify-start flex items-center gap-2"
              >
                <TreeDeciduous className="w-4 h-4" />
                Olive Grove
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

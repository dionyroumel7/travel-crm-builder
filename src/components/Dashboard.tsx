import { Card } from "@/components/ui/card";
import { Users, Calendar, Package, DollarSign, TrendingUp, MapPin } from "lucide-react";
import heroTravel from "@/assets/hero-travel.jpg";

const stats = [
  {
    title: "Total Customers",
    value: "1,284",
    change: "+12.5%",
    icon: Users,
    color: "text-primary",
  },
  {
    title: "Active Bookings",
    value: "156",
    change: "+8.2%",
    icon: Calendar,
    color: "text-accent",
  },
  {
    title: "Tour Packages",
    value: "42",
    change: "+3",
    icon: Package,
    color: "text-[hsl(var(--success))]",
  },
  {
    title: "Monthly Revenue",
    value: "$284,500",
    change: "+18.7%",
    icon: DollarSign,
    color: "text-[hsl(var(--info))]",
  },
];

const upcomingTours = [
  { destination: "Bali Paradise", date: "Nov 15, 2025", bookings: 24, status: "confirmed" },
  { destination: "European Adventure", date: "Nov 22, 2025", bookings: 18, status: "confirmed" },
  { destination: "Dubai Luxury", date: "Dec 1, 2025", bookings: 32, status: "filling" },
  { destination: "Japan Cultural", date: "Dec 8, 2025", bookings: 15, status: "open" },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden">
        <img 
          src={heroTravel} 
          alt="Travel destinations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-[hsl(var(--info))]/80 flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel CRM Dashboard
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Manage your customers, bookings, and tour packages all in one place
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <div className="flex items-center gap-1 text-sm text-[hsl(var(--success))]">
                  <TrendingUp className="h-4 w-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-secondary ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Tours */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Upcoming Tours</h2>
        <div className="space-y-4">
          {upcomingTours.map((tour) => (
            <div 
              key={tour.destination}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{tour.destination}</h3>
                  <p className="text-sm text-muted-foreground">{tour.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Bookings</p>
                  <p className="font-semibold">{tour.bookings}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tour.status === "confirmed" 
                    ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" 
                    : tour.status === "filling"
                    ? "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]"
                    : "bg-[hsl(var(--info))]/10 text-[hsl(var(--info))]"
                }`}>
                  {tour.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, MapPin, DollarSign, Plus } from "lucide-react";

interface Booking {
  id: string;
  customer: string;
  tour: string;
  date: string;
  travelers: number;
  amount: string;
  paid: string;
  status: "confirmed" | "pending" | "cancelled" | "completed";
}

const mockBookings: Booking[] = [
  {
    id: "BK-2025-001",
    customer: "Sarah Johnson",
    tour: "Bali Paradise - 7 Days",
    date: "Nov 15, 2025",
    travelers: 2,
    amount: "$4,500",
    paid: "$4,500",
    status: "confirmed",
  },
  {
    id: "BK-2025-002",
    customer: "Michael Chen",
    tour: "European Adventure - 14 Days",
    date: "Nov 22, 2025",
    travelers: 4,
    amount: "$12,000",
    paid: "$6,000",
    status: "pending",
  },
  {
    id: "BK-2025-003",
    customer: "Emma Wilson",
    tour: "Dubai Luxury - 5 Days",
    date: "Dec 1, 2025",
    travelers: 2,
    amount: "$5,400",
    paid: "$5,400",
    status: "confirmed",
  },
  {
    id: "BK-2025-004",
    customer: "David Rodriguez",
    tour: "Japan Cultural - 10 Days",
    date: "Dec 8, 2025",
    travelers: 3,
    amount: "$9,600",
    paid: "$3,200",
    status: "pending",
  },
];

export const Bookings = () => {
  const getStatusBadge = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return <Badge variant="success">Confirmed</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      case "completed":
        return <Badge variant="info">Completed</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">Track and manage tour bookings</p>
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4" />
          New Booking
        </Button>
      </div>

      <div className="grid gap-6">
        {mockBookings.map((booking) => (
          <Card key={booking.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{booking.tour}</h3>
                      {getStatusBadge(booking.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{booking.customer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{booking.travelers} travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Paid: {booking.paid} / {booking.amount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-2">
                <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                  View Details
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 lg:flex-none">
                  Edit
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

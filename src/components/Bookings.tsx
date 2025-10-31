import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, MapPin, DollarSign, Plus, Car, UserCheck } from "lucide-react";
import { bookingsData } from "@/data/bookings";
import { useState } from "react";

type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed";

const formatCurrency = (amount: number) => `€${amount.toLocaleString()}`;
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const Bookings = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterPlatform, setFilterPlatform] = useState<string>("all");

  const getStatusBadge = (remaining: number, daysUntilTravel: number): JSX.Element => {
    if (remaining === 0) {
      return <Badge variant="success">Fully Paid</Badge>;
    } else if (daysUntilTravel <= 30 && remaining > 0) {
      return <Badge variant="destructive">Payment Due</Badge>;
    } else if (remaining > 0) {
      return <Badge variant="warning">Partial Payment</Badge>;
    }
    return <Badge variant="info">Pending</Badge>;
  };

  const getTypeLabel = (type: string) => {
    return type === "Private" ? "Private" : "Group";
  };

  const filteredBookings = bookingsData.filter(booking => {
    const typeMatch = filterType === "all" || 
      (filterType === "private" && booking.typeOfTour === "Private") ||
      (filterType === "group" && booking.typeOfTour === "Group Departure");
    const platformMatch = filterPlatform === "all" || booking.platform.toLowerCase() === filterPlatform.toLowerCase();
    return typeMatch && platformMatch;
  });

  const totalRevenue = filteredBookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const totalDeposited = filteredBookings.reduce((sum, b) => sum + b.deposit, 0);
  const totalRemaining = filteredBookings.reduce((sum, b) => sum + b.remaining, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">Track and manage tour bookings - {filteredBookings.length} bookings</p>
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4" />
          New Booking
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
          <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Deposited</p>
          <p className="text-2xl font-bold text-[hsl(var(--success))]">{formatCurrency(totalDeposited)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Remaining</p>
          <p className="text-2xl font-bold text-[hsl(var(--warning))]">{formatCurrency(totalRemaining)}</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2">
            <Button 
              variant={filterType === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterType("all")}
            >
              All Types
            </Button>
            <Button 
              variant={filterType === "private" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterType("private")}
            >
              Private
            </Button>
            <Button 
              variant={filterType === "group" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterType("group")}
            >
              Group
            </Button>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={filterPlatform === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterPlatform("all")}
            >
              All Platforms
            </Button>
            <Button 
              variant={filterPlatform === "website" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterPlatform("website")}
            >
              Website
            </Button>
            <Button 
              variant={filterPlatform === "tourradar" ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilterPlatform("tourradar")}
            >
              Tourradar
            </Button>
          </div>
        </div>
      </Card>

      {/* Bookings List */}
      <div className="grid gap-4">
        {filteredBookings.map((booking, index) => (
          <Card key={`${booking.id}-${index}`} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{booking.tourName}</h3>
                      {getStatusBadge(booking.remaining, booking.daysUntilTravel)}
                      <Badge variant={booking.typeOfTour === "Private" ? "default" : "secondary"}>
                        {getTypeLabel(booking.typeOfTour)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Tour #{booking.id} • {booking.platform}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{formatCurrency(booking.totalPrice)}</p>
                    {booking.remaining > 0 && (
                      <p className="text-sm text-[hsl(var(--warning))]">
                        {formatCurrency(booking.remaining)} due
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{booking.fullName}</p>
                      <p className="text-xs text-muted-foreground">{booking.participants} travelers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{formatDate(booking.startDate)}</p>
                      <p className="text-xs text-muted-foreground">{booking.numberOfDays} days • {booking.daysUntilTravel}d until travel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Paid: {formatCurrency(booking.deposit)}</p>
                      <p className="text-xs text-muted-foreground">Commission: {formatCurrency(booking.commission)}</p>
                    </div>
                  </div>
                </div>

                {(booking.driver || booking.guide || booking.vehicle) && (
                  <div className="flex flex-wrap gap-4 pt-2 border-t">
                    {booking.driver && (
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Driver: <span className="font-medium">{booking.driver}</span></span>
                      </div>
                    )}
                    {booking.guide && (
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Guide: <span className="font-medium">{booking.guide}</span></span>
                      </div>
                    )}
                    {booking.vehicle && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Vehicle: <span className="font-medium">{booking.vehicle}</span></span>
                      </div>
                    )}
                  </div>
                )}
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

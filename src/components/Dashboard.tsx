import { Card } from "@/components/ui/card";
import { Users, Calendar, Package, DollarSign, TrendingUp, MapPin, Percent, Target, Car } from "lucide-react";
import heroTravel from "@/assets/hero-travel.jpg";
import { kpiData } from "@/data/kpis";

const formatCurrency = (amount: number) => `€${amount.toLocaleString()}`;
const formatPercent = (value: number) => `${value.toFixed(2)}%`;

const stats = [
  {
    title: "Total Bookings",
    value: kpiData.financial.totalBookings.toString(),
    change: `${formatPercent(kpiData.financial.revenueGrowthRate)} growth`,
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Total Revenue",
    value: formatCurrency(kpiData.financial.totalRevenue),
    change: formatCurrency(kpiData.financial.averageBookingValue) + " avg",
    icon: DollarSign,
    color: "text-accent",
  },
  {
    title: "Unique Customers",
    value: kpiData.operational.uniqueCustomers.toString(),
    change: `${kpiData.operational.averageGuestsPerBooking} avg pax`,
    icon: Users,
    color: "text-[hsl(var(--success))]",
  },
  {
    title: "Gross Margin",
    value: formatPercent(kpiData.financial.grossProfitMargin),
    change: formatCurrency(kpiData.operational.profitPerTour) + " per tour",
    icon: TrendingUp,
    color: "text-[hsl(var(--info))]",
  },
];

const tourTypeBreakdown = [
  {
    type: "Private Tours",
    count: kpiData.byType.private.count,
    percentage: kpiData.byType.private.percentage,
    revenue: formatCurrency(kpiData.byType.private.revenue),
    revenuePercent: kpiData.byType.private.revenuePercentage,
  },
  {
    type: "Group Tours",
    count: kpiData.byType.group.count,
    percentage: kpiData.byType.group.percentage,
    revenue: formatCurrency(kpiData.byType.group.revenue),
    revenuePercent: kpiData.byType.group.revenuePercentage,
  },
];

const platformBreakdown = [
  {
    platform: "Website",
    count: kpiData.byPlatform.website.count,
    percentage: kpiData.byPlatform.website.percentage,
    revenue: formatCurrency(kpiData.byPlatform.website.revenue),
  },
  {
    platform: "Tourradar",
    count: kpiData.byPlatform.tourradar.count,
    percentage: kpiData.byPlatform.tourradar.percentage,
    revenue: formatCurrency(kpiData.byPlatform.tourradar.revenue),
  },
  {
    platform: "Travel Agency",
    count: kpiData.byPlatform.travelAgency.count,
    percentage: kpiData.byPlatform.travelAgency.percentage,
    revenue: formatCurrency(kpiData.byPlatform.travelAgency.revenue),
  },
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

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Financial Performance
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <span className="font-semibold">{formatCurrency(kpiData.financial.totalRevenue)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Deposited</span>
              <span className="font-semibold">{formatCurrency(kpiData.financial.totalDeposited)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Remaining</span>
              <span className="font-semibold text-[hsl(var(--warning))]">{formatCurrency(kpiData.financial.totalRemaining)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm text-muted-foreground">Net Profit</span>
              <span className="font-semibold text-[hsl(var(--success))]">{formatCurrency(kpiData.financial.netProfit)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Net Margin</span>
              <span className="font-semibold">{formatPercent(kpiData.financial.netProfitMargin)}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Package className="h-5 w-5 text-accent" />
            Tour Type Breakdown
          </h3>
          <div className="space-y-4">
            {tourTypeBreakdown.map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.type}</span>
                  <span className="text-sm text-muted-foreground">{item.count} tours ({item.percentage}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-semibold">{item.revenue} ({item.revenuePercent}%)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all" 
                    style={{ width: `${item.revenuePercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-[hsl(var(--info))]" />
            Platform Distribution
          </h3>
          <div className="space-y-4">
            {platformBreakdown.map((item) => (
              <div key={item.platform} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.platform}</span>
                  <span className="text-sm text-muted-foreground">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="font-semibold">{item.revenue}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all" 
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Operational Metrics */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Operational Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Unique Tours</p>
            <p className="text-2xl font-bold">{kpiData.operational.uniqueTours}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Days Traveled</p>
            <p className="text-2xl font-bold">{kpiData.operational.totalDaysTraveled}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Avg Tour Duration</p>
            <p className="text-2xl font-bold">{kpiData.operational.averageTourDuration} days</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Avg Guests/Tour</p>
            <p className="text-2xl font-bold">{kpiData.operational.averageGuestsPerTour}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Revenue/Tour</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.operational.revenuePerTour)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Cost/Tour</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.operational.costPerTour)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Profit/Tour</p>
            <p className="text-2xl font-bold text-[hsl(var(--success))]">{formatCurrency(kpiData.operational.profitPerTour)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Vehicle Utilization</p>
            <p className="text-2xl font-bold">{formatPercent(kpiData.operational.vehicleUtilizationRate)}</p>
          </div>
        </div>
      </Card>

      {/* Marketing & Staff */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Marketing Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Lead-to-Booking Conversion</span>
              <span className="font-semibold">{formatPercent(kpiData.marketing.leadToBookingConversion)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Customer Acquisition Cost</span>
              <span className="font-semibold">{formatCurrency(kpiData.marketing.customerAcquisitionCost)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Marketing Efficiency Ratio</span>
              <span className="font-semibold">{kpiData.marketing.marketingEfficiencyRatio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Cost per Booking</span>
              <span className="font-semibold">{formatCurrency(kpiData.marketing.costPerBooking)}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Car className="h-5 w-5" />
            Staff & Resources
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Working Days</span>
              <span className="font-semibold">{kpiData.staff.totalWorkingDays}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Driver Days</span>
              <span className="font-semibold">{kpiData.staff.totalDaysDrivers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Guide Days</span>
              <span className="font-semibold">{kpiData.staff.totalDaysGuides}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Revenue per Guide</span>
              <span className="font-semibold">{formatCurrency(kpiData.staff.revenuePerGuide)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Staff Cost</span>
              <span className="font-semibold">{formatCurrency(kpiData.staff.totalStaffCost)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

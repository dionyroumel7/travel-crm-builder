import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, Target, Percent, Activity } from "lucide-react";
import { kpiData } from "@/data/kpis";

const formatCurrency = (amount: number) => `€${amount.toLocaleString()}`;
const formatPercent = (value: number) => `${value.toFixed(2)}%`;

const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon: Icon,
  colorClass = "text-primary"
}: { 
  title: string; 
  value: string; 
  subtitle?: string; 
  trend?: 'up' | 'down' | 'neutral';
  icon: any;
  colorClass?: string;
}) => (
  <Card className="p-4">
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {subtitle && (
          <div className="flex items-center gap-1 mt-1">
            {trend === 'up' && <TrendingUp className="h-3 w-3 text-success" />}
            {trend === 'down' && <TrendingDown className="h-3 w-3 text-destructive" />}
            <span className={`text-xs ${trend === 'up' ? 'text-success' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground'}`}>
              {subtitle}
            </span>
          </div>
        )}
      </div>
      <div className={`p-2 rounded-lg bg-secondary ${colorClass}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </Card>
);

export const Insights = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Business Insights & KPIs</h1>
        <p className="text-muted-foreground">Comprehensive performance metrics and analytics</p>
      </div>

      {/* Key Performance Indicators */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Revenue"
            value={formatCurrency(kpiData.financial.totalRevenue)}
            subtitle={`${formatPercent(kpiData.financial.revenueGrowthRate)} growth`}
            trend="up"
            icon={DollarSign}
            colorClass="text-primary"
          />
          <MetricCard
            title="Net Profit"
            value={formatCurrency(kpiData.financial.netProfit)}
            subtitle={`${formatPercent(kpiData.financial.netProfitMargin)} margin`}
            trend="up"
            icon={TrendingUp}
            colorClass="text-success"
          />
          <MetricCard
            title="Total Bookings"
            value={kpiData.financial.totalBookings.toString()}
            subtitle={`${kpiData.operational.toursPerMonth.toFixed(1)} per month`}
            icon={Calendar}
            colorClass="text-accent"
          />
          <MetricCard
            title="Unique Customers"
            value={kpiData.operational.uniqueCustomers.toString()}
            subtitle={`${kpiData.operational.guestsPerMonth.toFixed(1)} guests/month`}
            icon={Users}
            colorClass="text-info"
          />
        </div>
      </div>

      {/* Financial Performance */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Financial Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Revenue</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.totalRevenue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Revenue in Bank</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.totalRevenueBank)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Avg Booking Value</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.averageBookingValue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Revenue per Customer</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.revenuePerCustomer)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Revenue per Tour</span>
                <span className="font-semibold">{formatCurrency(kpiData.operational.revenuePerTour)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Percent className="h-5 w-5 text-success" />
              Profitability Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Gross Profit</span>
                <span className="font-semibold text-success">{formatCurrency(kpiData.financial.grossProfit)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Gross Margin</span>
                <span className="font-semibold">{formatPercent(kpiData.financial.grossProfitMargin)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Operating Profit</span>
                <span className="font-semibold text-success">{formatCurrency(kpiData.financial.operatingProfit)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Operating Margin</span>
                <span className="font-semibold">{formatPercent(kpiData.financial.operatingMargin)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-muted-foreground">Net Profit</span>
                <span className="font-semibold text-success">{formatCurrency(kpiData.financial.netProfit)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Net Margin</span>
                <span className="font-semibold">{formatPercent(kpiData.financial.netProfitMargin)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-warning" />
              Cost Structure
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Fixed Costs</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.fixedCosts)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Variable Costs</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.variableCosts)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-muted-foreground">Total Costs</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.totalCosts)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost per Day</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.costPerDayOperational)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost per Tour</span>
                <span className="font-semibold">{formatCurrency(kpiData.operational.costPerTour)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-info" />
              Break-Even Analysis
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Break-Even Customers</span>
                <span className="font-semibold">{kpiData.financial.breakEvenCustomers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Break-Even Sales</span>
                <span className="font-semibold">{formatCurrency(kpiData.financial.breakEvenSales)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-muted-foreground">Current Customers</span>
                <span className="font-semibold text-success">{kpiData.operational.uniqueCustomers}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Above Break-Even</span>
                <span className="font-semibold text-success">
                  {kpiData.operational.uniqueCustomers - kpiData.financial.breakEvenCustomers} customers
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Operational Efficiency */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Operational Efficiency</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <MetricCard
            title="Revenue per Day"
            value={formatCurrency(kpiData.operational.revenuePerTourDay)}
            icon={DollarSign}
          />
          <MetricCard
            title="Profit per Day"
            value={formatCurrency(kpiData.operational.operatingProfitPerTourDay)}
            icon={TrendingUp}
          />
          <MetricCard
            title="Revenue per Guest/Day"
            value={formatCurrency(kpiData.operational.revenuePerGuestPerDay)}
            icon={Users}
          />
          <MetricCard
            title="Revenue Efficiency"
            value={formatPercent(kpiData.operational.revenueEfficiencyRatio)}
            subtitle="Revenue/Cost ratio"
            trend="up"
            icon={Activity}
          />
          <MetricCard
            title="Load Factor"
            value={formatPercent(kpiData.operational.loadFactor)}
            icon={Percent}
          />
          <MetricCard
            title="Vehicle Utilization"
            value={formatPercent(kpiData.operational.vehicleUtilizationRate)}
            icon={Activity}
          />
        </div>
      </div>

      {/* Tour Performance */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Tour Performance Metrics</h2>
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
            <p className="text-sm text-muted-foreground mb-1">Avg Guests per Tour</p>
            <p className="text-2xl font-bold">{kpiData.operational.averageGuestsPerTour}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Revenue per Tour</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.operational.revenuePerTour)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Profit per Tour</p>
            <p className="text-2xl font-bold text-success">{formatCurrency(kpiData.operational.profitPerTour)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Tour Gross Margin</p>
            <p className="text-2xl font-bold">{formatPercent(kpiData.operational.averageTourGrossProfitMargin)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Tours per Month</p>
            <p className="text-2xl font-bold">{kpiData.operational.toursPerMonth.toFixed(1)}</p>
          </div>
        </div>
      </Card>

      {/* Staff Performance */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Staff & Human Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Working Days</p>
            <p className="text-2xl font-bold">{kpiData.staff.totalWorkingDays}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Guide Days</p>
            <p className="text-2xl font-bold">{kpiData.staff.totalDaysGuides}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Driver Days</p>
            <p className="text-2xl font-bold">{kpiData.staff.totalDaysDrivers}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Staff Cost</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.staff.totalStaffCost)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Revenue per Employee</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.staff.revenuePerEmployee)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Profit per Employee</p>
            <p className="text-2xl font-bold text-success">{formatCurrency(kpiData.staff.profitPerEmployee)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Profit per Guide</p>
            <p className="text-2xl font-bold text-success">{formatCurrency(kpiData.staff.profitPerGuide)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Cost per Guide Day</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.staff.costPerGuideDay)}</p>
          </div>
        </div>
      </Card>

      {/* Marketing Performance */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Marketing Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
            <p className="text-2xl font-bold">{formatPercent(kpiData.marketing.leadToBookingConversion)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Customer Acquisition Cost</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.marketing.customerAcquisitionCost)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Marketing Efficiency</p>
            <p className="text-2xl font-bold">{kpiData.marketing.marketingEfficiencyRatio.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Cost per Booking</p>
            <p className="text-2xl font-bold">{formatCurrency(kpiData.marketing.costPerBooking)}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

"use client"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "direct", sales: 300.56, fill: "var(--pie-chart-4)" },
  { category: "affiliate", sales: 135.18, fill: "var(--pie-chart-3)" },
  { category: "sponsored", sales: 154.02, fill: "var(--pie-chart-1)" },
  { category: "email", sales:  48.96, fill: "var(--pie-chart-2)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
  direct: {
    label: "Direct",
    color: "var(--pie-chart-1)",
  },
  affiliate: {
    label: "Affiliate", 
    color: "var(--pie-chart-2)",
  },
  sponsored: {
    label: "Sponsored",
    color: "var(--pie-chart-3)",
  },
  email: {
    label: "E-mail",
    color: "var(--pie-chart-4)",
  },
} satisfies ChartConfig

export function TotalSalesChart() {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  // Calculate the percentage for the largest segment (Direct)
  const directPercentage = React.useMemo(() => {
    const directSales = chartData.find(item => item.category === "direct")?.sales || 0
    return ((directSales / totalSales) * 100).toFixed(1)
  }, [totalSales])

  return (
    <Card className="bg-card flex flex-col w-full max-w-xs border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg font-medium">Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="category"
              innerRadius={50}
              outerRadius={80}
              strokeWidth={0}
              paddingAngle={4}
              cornerRadius={8}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {directPercentage}%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        
        {/* Custom Legend */}
        <div className="mt-4 space-y-2">
          {chartData.map((item) => (
            <div key={item.category} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: item.fill }}
                />
                <span className="capitalize">{item.category === 'email' ? 'E-mail' : item.category}</span>
              </div>
              <span className="font-medium">${item.sales.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", current: 15, previous: 12 },
  { month: "Feb", current: 18, previous: 15 },
  { month: "Mar", current: 14, previous: 18 },
  { month: "Apr", current: 16, previous: 14 },
  { month: "May", current: 20, previous: 16 },
  { month: "Jun", current: 22, previous: 20 },
];

const chartConfig = {
  current: {
    label: "Current",
  },
  previous: {
    label: "Previous",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  const last30PercentIndex = Math.floor(data.length * 0.7);

  return (
    <Card className="h-full border-none">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-12 pb-4">
          <h3 className="text-lg font-semibold text-card-foreground">
            Revenue
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <span className="text-sm text-muted-foreground">
                Current Week
              </span>
              <span className="text-sm font-medium">$58,211</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              <span className="text-sm text-muted-foreground">
                Previous Week
              </span>
              <span className="text-sm font-medium">$68,768</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full h-[250px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart
              accessibilityLayer
              data={data}
              height={100}
              margin={{ top: 5, left: 12, right: 12, bottom: 5 }}
            >
              <CartesianGrid vertical={false} stroke="rgba(128,128,128,0.1)" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={5}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 10, 20, 30]}
                tickFormatter={(val) => `${val}M`}
                tick={{ fontSize: 10 }}
                width={25}
                domain={[0, 30]}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />

              {/* Current line with glow */}
              <Line
                type="monotone"
                dataKey="current"
                stroke="#A8C5DA"
                strokeWidth={2}
                dot={false}
                style={{ filter: "drop-shadow(0 0 6px rgba(168,197,218,0.6))" }}
              />

              {/* Previous line: solid first 70%, dotted last 30% */}
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#CFDFEB"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default RevenueChart;

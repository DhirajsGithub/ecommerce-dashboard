"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Projections vs Actuals stacked bar chart";

const rawData = [
  { month: "Jan", projections: 20, actuals: 16 },
  { month: "Feb", projections: 28, actuals: 21 },
  { month: "Mar", projections: 22, actuals: 17 },
  { month: "Apr", projections: 29, actuals: 22 },
  { month: "May", projections: 19, actuals: 16 },
  { month: "Jun", projections: 26, actuals: 21 },
];

// Transform → remainder = projections - actuals
const chartData = rawData.map((d) => ({
  month: d.month,
  actuals: d.actuals,
  remainder: Math.max(d.projections - d.actuals, 0),
}));

const chartConfig = {
  actuals: {
    label: "Actuals",
  },
  remainder: {
    label: "Projections",
  },
} satisfies ChartConfig;

export function ProjectionsChart() {
  return (
    <Card className="border-none w-full min-w-[340px]">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold text-card-foreground pb-3">
          Projections vs Actuals
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full h-[180px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart 
              accessibilityLayer 
              data={chartData}
              height={100}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <CartesianGrid vertical={false} stroke="rgba(128, 128, 128, 0.2)" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={5}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, 30]}
                ticks={[0, 15, 30]}
                tickFormatter={(value) => `${value}M`}
                tick={{ fontSize: 10 }}
                width={25}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill="#A8C5DA"
                radius={[0, 0, 2, 2]}
                barSize={20}
              />
              <Bar
                dataKey="remainder"
                stackId="a"
                fill="#CFDFEB99"
                radius={[2, 2, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectionsChart;
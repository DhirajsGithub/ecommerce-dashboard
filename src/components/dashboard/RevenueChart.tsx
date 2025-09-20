import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', current: 15, previous: 12 },
  { month: 'Feb', current: 18, previous: 15 },
  { month: 'Mar', current: 14, previous: 18 },
  { month: 'Apr', current: 16, previous: 14 },
  { month: 'May', current: 20, previous: 16 },
  { month: 'Jun', current: 22, previous: 20 }
];

export function RevenueChart() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Revenue</h3>
          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <span className="text-sm text-muted-foreground">Current Week</span>
              <span className="text-sm font-medium">$58,211</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              <span className="text-sm text-muted-foreground">Previous Week</span>
              <span className="text-sm font-medium">$68,768</span>
            </div>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `${value}M`}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="hsl(var(--foreground))" 
                strokeWidth={2}
                dot={false}
                strokeDasharray="none"
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', projections: 15, actuals: 18 },
  { month: 'Feb', projections: 20, actuals: 25 },
  { month: 'Mar', projections: 18, actuals: 22 },
  { month: 'Apr', projections: 25, actuals: 28 },
  { month: 'May', projections: 22, actuals: 20 },
  { month: 'Jun', projections: 30, actuals: 32 }
];

export function ProjectionsChart() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Projections vs Actuals</h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-muted-foreground">Projections</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-300"></div>
              <span className="text-sm text-muted-foreground">Actuals</span>
            </div>
          </div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="20%">
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
              <Bar 
                dataKey="projections" 
                fill="hsl(220 70% 50%)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar 
                dataKey="actuals" 
                fill="hsl(220 70% 70%)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Direct', value: 300.56, color: 'hsl(220 70% 50%)' },
  { name: 'Affiliate', value: 135.18, color: 'hsl(220 70% 70%)' },
  { name: 'Sponsored', value: 154.02, color: 'hsl(160 70% 50%)' },
  { name: 'E-mail', value: 48.96, color: 'hsl(160 70% 70%)' }
];

const salesData = [
  { label: 'Direct', value: '$300.56', color: 'hsl(220 70% 50%)' },
  { label: 'Affiliate', value: '$135.18', color: 'hsl(220 70% 70%)' },
  { label: 'Sponsored', value: '$154.02', color: 'hsl(160 70% 50%)' },
  { label: 'E-mail', value: '$48.96', color: 'hsl(160 70% 70%)' }
];

export function TotalSalesChart() {
  return (
    <div className="bg-card rounded-lg p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">Total Sales</h3>
        
        <div className="flex items-center justify-between">
          <div className="relative w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-card-foreground">38.6%</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 ml-6">
            <div className="space-y-3">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
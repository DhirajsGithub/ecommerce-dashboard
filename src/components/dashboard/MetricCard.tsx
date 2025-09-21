import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  className?: string;
  index?: number;
}

export function MetricCard({
  title,
  value,
  change,
  positive = true,
  className,
  index,
}: MetricCardProps) {
  let bgApplied = 'bg-card'
  let titleApplied = 'text-muted-foreground'
  let valueApplied = 'text-card-foreground'
  if(index === 0){
    bgApplied = 'bg-metricCard1'
    titleApplied = 'text-[hsla(0_0%_11%_0.4)]'
    valueApplied = 'text-[hsl(222.2_84%_4.9%)]'
  } else if(index === 3){
    bgApplied = 'bg-metricCard4'
     titleApplied = 'text-[hsla(0_0%_11%_0.4)]'
     valueApplied = 'text-[hsl(222.2_84%_4.9%)]'
  }

console.log('bgApplied ', bgApplied)

  return (
    <div className={cn(`${bgApplied} rounded-lg p-6 min-w-[170px]`, className)}>
      <div className="space-y-2">
        <p className={cn("text-sm font-medium", valueApplied)}>{title}</p>
        <div className="flex items-center justify-between">
          <h3 className={cn("text-2xl font-bold", valueApplied)}>{value}</h3>
          <div
            className={cn(
              "flex items-center gap-1 text-sm",
              positive ? valueApplied : valueApplied
            )}
          >
            <span>{change}</span>
            {positive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

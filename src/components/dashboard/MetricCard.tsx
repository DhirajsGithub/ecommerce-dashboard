import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  positive = true,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("bg-card rounded-lg p-6", className)}>
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-card-foreground">{value}</h3>
          <div
            className={cn(
              "flex items-center gap-1 text-sm",
              positive ? "text-card-foreground" : "text-card-foreground"
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

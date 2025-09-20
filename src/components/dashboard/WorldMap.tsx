import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorldMap from "react-svg-worldmap";

const locations = [
  {
    name: "New York",
    value: "72K",
    country: "US",
    color: "#3B82F6",
    revenue: 72,
  },
  {
    name: "San Francisco",
    value: "39K",
    country: "US",
    color: "#10B981",
    revenue: 39,
  },
  {
    name: "Sydney",
    value: "25K",
    country: "AU",
    color: "#F59E0B",
    revenue: 25,
  },
  {
    name: "Singapore",
    value: "61K",
    country: "SG",
    color: "#EF4444",
    revenue: 61,
  },
];

// Data for the world map - we'll use country codes and values
const mapData = [
  { country: "us", value: 111 }, // Combined NY + SF
  { country: "au", value: 25 },
  { country: "sg", value: 61 },
];

export default function RevenueWorldMap() {
  const maxValue = Math.max(...locations.map((loc) => loc.revenue));

  return (
    <Card className="w-full max-w-lg bg-card border-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">
          Revenue by Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* World Map */}
        <div className="h-48 p-4 flex items-center justify-center">
          <WorldMap
            data={mapData}
            richInteraction
            backgroundColor="transparent"
            size="sm"
            styleFunction={(context) => {
              const { countryValue } = context;
              return {
                fill: "#A8C5DA",
                fillOpacity: countryValue > 0 ? 0.8 : 0.3,
                stroke: "#CBD5E1",
                strokeWidth: 1,
                strokeOpacity: 0.5,
                cursor: "pointer",
              };
            }}
          />
        </div>

        {/* Location list with progress bars */}
        {/* Location list with progress bars */}
        <div className="flex flex-col gap-4">
          {locations.map((location, index) => {
            const percentage = (location.revenue / (maxValue + 10)) * 100;

            return (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-card-foreground">
                      {location.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-card-foreground">
                    {location.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  {" "}
                  {/* Changed to h-2 */}
                  <div
                    className="h-1 rounded-full transition-all duration-300 text-card-foreground"
                    style={{
                      backgroundColor: "#A8C5DA",
                      width: `${percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

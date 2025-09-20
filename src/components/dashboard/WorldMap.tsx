import React from 'react';

const locations = [
  { name: 'New York', value: '72K', left: '25%', top: '30%' },
  { name: 'San Francisco', value: '39K', left: '10%', top: '35%' },
  { name: 'Sydney', value: '25K', left: '85%', top: '70%' },
  { name: 'Singapore', value: '61K', left: '75%', top: '55%' }
];

export function WorldMap() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">Revenue by Location</h3>
        
        {/* World Map SVG */}
        <div className="relative h-48 bg-muted/20 rounded-lg overflow-hidden">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            style={{ filter: 'hue-rotate(200deg) saturate(0.3)' }}
          >
            {/* Simplified world map paths */}
            <path
              d="M200,150 L250,120 L320,130 L380,140 L420,160 L400,200 L350,220 L300,210 L250,180 Z"
              fill="hsl(var(--muted-foreground))"
              opacity="0.3"
            />
            <path
              d="M100,200 L180,180 L220,200 L200,250 L150,280 L100,270 Z"
              fill="hsl(var(--muted-foreground))"
              opacity="0.3"
            />
            <path
              d="M500,120 L600,110 L700,130 L750,150 L720,200 L650,220 L580,210 L520,180 Z"
              fill="hsl(var(--muted-foreground))"
              opacity="0.3"
            />
            <path
              d="M800,200 L850,180 L900,200 L880,250 L830,280 L800,270 Z"
              fill="hsl(var(--muted-foreground))"
              opacity="0.3"
            />
          </svg>
          
          {/* Location markers */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: location.left, top: location.top }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Location list */}
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{location.name}</span>
              <span className="text-sm font-medium text-card-foreground">{location.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
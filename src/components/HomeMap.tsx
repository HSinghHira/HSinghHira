"use client";

import { useState } from "react";
import {
  Map,
  MapArc,
  MapMarker,
  MapPopup,
  MarkerContent,
  MarkerLabel,
  type MapArcDatum,
} from "@/components/ui/map";

interface JourneyArc extends MapArcDatum {
  origin: string;
  destination: string;
}

const journeyData: JourneyArc[] = [
  {
    id: "chandigarh-to-auckland",
    origin: "Chandigarh",
    destination: "Auckland",
    from: [76.7794, 30.7333],
    to: [174.7633, -36.8485],
  }
];

interface SelectedArc {
  arc: JourneyArc;
  lngLat: { longitude: number; latitude: number };
}

export function HomeMap() {
  const [selected, setSelected] = useState<SelectedArc | null>(null);

  return (
    <div className="relative w-full h-full">
      <Map 
        viewport={{ center: [125, 0], zoom: 1 }} 
        className="w-full h-full"
        interactive={false}
      >
        <MapArc<JourneyArc>
          data={journeyData}
          curvature={0.5}
          paint={{
            "line-color": "#c8a97a",
            "line-width": 2,
            "line-opacity": 0.6,
          }}
          hoverPaint={{
            "line-width": 4,
            "line-opacity": 1,
            "line-color": "#c8a97a",
          }}
          onHover={(event) =>
            setSelected(
              event
                ? {
                    arc: event.arc,
                    lngLat: {
                      longitude: event.longitude,
                      latitude: event.latitude,
                    },
                  }
                : null,
            )
          }
        />

        <MapMarker longitude={76.7794} latitude={30.7333}>
          <MarkerContent>
            <div className="bg-accent shadow-[0_0_8px_var(--accent)] rounded-full size-2" />
            <MarkerLabel position="top" className="font-mono text-[10px] text-accent/80 tracking-tighter">
              Chandigarh
            </MarkerLabel>
          </MarkerContent>
        </MapMarker>

        <MapMarker longitude={174.7633} latitude={-36.8485}>
          <MarkerContent>
            <div className="bg-accent shadow-[0_0_8px_var(--accent)] rounded-full size-2" />
            <MarkerLabel position="top" className="font-mono text-[10px] text-accent/80 tracking-tighter">
              Auckland
            </MarkerLabel>
          </MarkerContent>
        </MapMarker>

        {selected && (
          <MapPopup
            longitude={selected.lngLat.longitude}
            latitude={selected.lngLat.latitude}
            offset={12}
            closeOnClick={false}
            className="bg-background/95 backdrop-blur-sm p-0 border-accent/20"
          >
            <div className="flex items-center gap-2 px-2.5 py-1.5 font-mono text-[10px] tracking-tight">
              <span className="bg-accent rounded-full size-1.5 animate-pulse" />
              <span className="font-bold text-foreground">
                {selected.arc.origin}
              </span>
              <span className="text-accent">→</span>
              <span className="font-bold text-foreground">
                {selected.arc.destination}
              </span>
            </div>
          </MapPopup>
        )}
      </Map>
    </div>
  );
}

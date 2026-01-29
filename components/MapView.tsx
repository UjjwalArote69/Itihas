"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { events } from "@/data/events";

export default function MapView() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style:
        "https://demotiles.maplibre.org/style.json",
      center: [78.9629, 20.5937], // Centered on India
      zoom: 4,
    });

    events.forEach((event) => {
      new maplibregl.Marker()
        .setLngLat([
          event.location.lng,
          event.location.lat,
        ])
        .setPopup(
          new maplibregl.Popup().setText(
            event.title,
          ),
        )
        .addTo(map);
    });

    return () => map.remove();
  });

  return (
    <div
      id="map"
      style={{
        height: "500px",
        width: "100%",
      }}
    />
  );
}

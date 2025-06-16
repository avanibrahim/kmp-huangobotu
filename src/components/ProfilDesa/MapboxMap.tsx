
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Koordinat demo (misal pusat desa)
const desaCoordinates: [number, number] = [123.036, -0.569]; // Gorontalo, ganti sesuai kebutuhan

type Props = {
  token: string;
};

const MapboxMap = ({ token }: Props) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: desaCoordinates,
      zoom: 13,
      cooperativeGestures: true,
      attributionControl: false,
    });

    map.current.scrollZoom.enable();
    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");

    // Marker desa
    new mapboxgl.Marker({ color: "#d32f2f" }).setLngLat(desaCoordinates).setPopup(
      new mapboxgl.Popup({ offset: 24, closeButton: false }).setText("Kantor Desa")
    ).addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [token]);

  return (
    <div className="relative w-full h-64 md:h-56 lg:h-60">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow" />
    </div>
  );
};

export default MapboxMap;

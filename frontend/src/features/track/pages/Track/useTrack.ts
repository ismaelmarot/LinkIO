import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useThemeMode } from "../../../../store/themeStore";

const TILES = {
  light:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};

const ATTRIBUTION =
  "&copy; <a href='https://www.openstreetmap.org/copyright'>OSM</a> &copy; <a href='https://carto.com/'>CARTO</a>";

export const useTrack = () => {
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const mode = useThemeMode((s) => s.mode);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("track-map", {
      center: [-34.6037, -58.3816],
      zoom: 13,
      zoomControl: false,
    });

    tileLayerRef.current = L.tileLayer(TILES[mode], {
      attribution: ATTRIBUTION,
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!tileLayerRef.current || !mapRef.current) return;
    tileLayerRef.current.setUrl(TILES[mode]);
  }, [mode]);

  const handleToggleTrack = () => {
    setIsTracking((prev) => !prev);
  };

  return {
    isTracking,
    handleToggleTrack,
  };
};

import { useState, useEffect, useRef, useCallback } from "react";

interface Position {
  latitude: number;
  longitude: number;
  altitude: number | null;
  speed: number | null;
  accuracy: number | null;
}

interface UseGeolocationReturn {
  position: Position | null;
  error: string | null;
  isWatching: boolean;
  startWatching: () => void;
  stopWatching: () => void;
}

export const useGeolocation = (): UseGeolocationReturn => {
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isWatching, setIsWatching] = useState(false);
  const watchIdRef = useRef<number | null>(null);

  const startWatching = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported in this browser");
      return;
    }

    // Check if we're likely in a desktop environment without GPS
    const userAgent = navigator.userAgent.toLowerCase();
    const isDesktop = userAgent.indexOf("mobile") === -1 && 
                     (userAgent.indexOf("windows") !== -1 || 
                      userAgent.indexOf("macintosh") !== -1 ||
                      userAgent.indexOf("linux") !== -1);

    setError(null);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          altitude: pos.coords.altitude,
          speed: pos.coords.speed,
          accuracy: pos.coords.accuracy,
        });
        setError(null);
      },
      (err) => {
        let errorMessage = "Error de ubicación desconocido";
        
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = "Permiso de ubicación denegado. Por favor, habilite el acceso a la ubicación en los permisos del navegador.";
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = "Ubicación no disponible. Asegúrese de que el GPS esté activado y tenga vista clara al cielo.";
            break;
          case err.TIMEOUT:
            errorMessage = "Timeout de ubicación. La posición no pudo ser determinada dentro del tiempo límite.";
            break;
          default:
            errorMessage = `Error de ubicación: ${err.message}`;
        }
        
        // Add specific guidance for common desktop issues
        if (isDesktop && (err.code === err.POSITION_UNAVAILABLE || err.code === err.TIMEOUT)) {
          errorMessage += " En computadoras de escritorio, la ubicación se determina por WiFi o IP, lo que puede ser menos preciso o no disponible.";
        }
        
        setError(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increased timeout
        maximumAge: 5000, // Allow cached positions up to 5 seconds old
      }
    );

    setIsWatching(true);
  }, []);

  const stopWatching = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsWatching(false);
  }, []);

  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  return { position, error, isWatching, startWatching, stopWatching };
};

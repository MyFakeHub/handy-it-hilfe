import { useState, useEffect } from "react";

interface GeoData {
  city: string | null;
  loading: boolean;
}

export function useGeolocation(): GeoData {
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Geo fetch failed");
        const data = await res.json();
        if (data.city) {
          setCity(data.city);
        }
      } catch {
        // Fallback: no city
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  return { city, loading };
}

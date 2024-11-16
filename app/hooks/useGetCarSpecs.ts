import { useState, useEffect } from "react";
import { CarSpecDto } from "../Dto/CarSpecDto";

export const useGetCarSpecs = () => {
  const [carSpecs, setCarSpecs] = useState<CarSpecDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarSpecs = async () => {
      try {
        const response = await fetch("/api/car-specs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CarSpecDto[] = await response.json();
        setCarSpecs(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarSpecs();
  }, []);

  return { carSpecs, loading, error };
};
import { useState, useEffect } from "react";
import { RateDto } from "@/app/dto/RateDto";

export const useGetRates = () => {
  const [rates, setRates] = useState<RateDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("/api/rates");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: RateDto[] = await response.json();
        setRates(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, loading, error };
};
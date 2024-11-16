import { useState, useEffect } from "react";
import { RentalDto } from "../Dto/RentalDto";

export const useGetRentals = () => {
  const [rentals, setRentals] = useState<RentalDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch("/api/rentals");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: RentalDto[] = await response.json();
        setRentals(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  return { rentals, loading, error };
};
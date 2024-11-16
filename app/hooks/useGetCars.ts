"use client"

import { useState, useEffect } from "react";
import { CarDto } from "@/app/Dto/CarDto";

export const useGetCars = () => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CarDto[] = await response.json();
        setCars(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (cars.length > 0) {
    console.log("Cars data:", cars);
  } else {
    console.log("No cars data available.");
  }

  return { cars, loading, error };
};
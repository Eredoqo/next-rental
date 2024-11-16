import { useState, useEffect } from "react";
import { BookingDto } from "../Dto/BookingDto";

export const useGetBookings = () => {
  const [bookings, setBookings] = useState<BookingDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BookingDto[] = await response.json();
        setBookings(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return { bookings, loading, error };
};
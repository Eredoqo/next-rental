import { BookingDto } from "./BookingDto";
import { RentalDto } from "./RentalDto";

export interface UserDto {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  location?: string;
  phone?: string;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
  bookings: BookingDto[];
  rentals: RentalDto[];
}
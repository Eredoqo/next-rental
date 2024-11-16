import { RentalDto } from "./RentalDto";
import { RateDto } from "./RateDto";
import { CarSpecDto } from "./CarSpecDto";
import { BookingDto } from "./BookingDto";


export interface CarDto {

  id: string;

  make: string;

  model: string;

  year: number;

  status: string;

  isNew: string;

  rentals: RentalDto[];

  rates: RateDto[];

  carSpec: CarSpecDto[];

  bookings: BookingDto[];

}
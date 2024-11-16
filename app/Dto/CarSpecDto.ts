import { CarDto } from "./CarDto";

export interface CarSpecDto {
  id: string;
  carTitle: string;
  image: string;
  description: string;
  rated: number;
  body: string;
  price: number;
  mileage: number;
  transmission: string;
  seats: number;
  fuel: string;
  gps: boolean;
  childSeat: string;
  aircondition: boolean;
  music: boolean;
  carKit: boolean;
  audio: boolean;
  climateControl: boolean;
  createdAt: Date;
  updatedAt: Date;
  carId: string;
  car: CarDto;
}
import { CarDto } from "./CarDto";


export interface RateDto {

  id: string;

  carId: string;

  dailyRate: number;

  weeklyRate: number;

  car: {

    id: string;

    make: string;

    model: string;

    year: number;

    status: string;

    isNew: string;

  };

}

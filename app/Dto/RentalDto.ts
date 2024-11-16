import { CarDto } from "./CarDto";
import { UserDto } from "./UserDto";
export interface RentalDto {

  id: string;

  startDate: Date;

  endDate: Date;

  pickUpLocation: string;

  dropOffLocation: string;

  timePickedUp: Date;

  timeDroppedOff: Date;

  totalCost: number;

  carId: string;

  userId: string;

  user: UserDto;

  car: CarDto;

}
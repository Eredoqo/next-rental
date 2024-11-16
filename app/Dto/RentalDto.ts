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
  car: CarDto;
  user: UserDto;
}
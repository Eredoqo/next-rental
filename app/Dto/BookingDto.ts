export interface BookingDto {
  id: string;
  date: Date;
  userId: string;
  carId: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserDto;
  car: CarDto;
}
export interface RateDto {
  id: string;
  carId: string;
  dailyRate: number;
  weeklyRate: number;
  car: CarDto;
}
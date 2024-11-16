import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CarDto } from "@/app/dto/CarDto";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: {
        Rentals: {
          include: {
            User: true,
          },
        },
        Rates: true,
        CarSpec: true,
        bookings: {
          include: {
            user: true,
          },
        },
      },
    });

    const responseData: CarDto[] = cars.map((car) => ({
      id: car.id,
      make: car.make,
      model: car.model,
      year: car.year,
      status: car.status,
      isNew: car.isNew,
      rentals: car.Rentals.map((rental) => ({
        id: rental.id,
        startDate: rental.startDate,
        endDate: rental.endDate,
        pickUpLocation: rental.pickUpLocation,
        dropOffLocation: rental.dropOffLocation,
        timePickedUp: rental.timePickedUp,
        timeDroppedOff: rental.timeDroppedOff,
        totalCost: rental.totalCost,
        carId: rental.carId,
        userId: rental.userId,
        user: {
          id: rental.User.id,
          email: rental.User.email,
          firstName: rental.User.firstName,
          lastName: rental.User.lastName,
        },
      })),
      rates: car.Rates.map((rate) => ({
        id: rate.id,
        carId: rate.carId,
        dailyRate: rate.dailyRate,
        weeklyRate: rate.weeklyRate,
      })),
      carSpec: car.CarSpec.map((spec) => ({
        id: spec.id,
        carTitle: spec.carTitle,
        image: spec.image,
        description: spec.description,
        rated: spec.rated,
        body: spec.body,
        price: spec.price,
        mileage: spec.mileage,
        transmission: spec.transmission,
        seats: spec.seats,
        fuel: spec.fuel,
        gps: spec.gps,
        childSeat: spec.childSeat,
        aircondition: spec.aircondition,
        music: spec.music,
        carKit: spec.carKit,
        audio: spec.audio,
        climateControl: spec.climateControl,
        carId: spec.carId,
      })),
      bookings: car.bookings.map((booking) => ({
        id: booking.id,
        date: booking.date,
        userId: booking.userId,
        carId: booking.carId,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        user: {
          id: booking.User.id,
          email: booking.User.email,
          firstName: booking.User.firstName,
          lastName: booking.User.lastName,
        },
      })),
    }));

    return NextResponse.json<CarDto[]>(responseData);
  } catch (error) {
    console.error("Error fetching car data:", error);
    return NextResponse.json(
      { message: "Error fetching car data" },
      { status: 500 }
    );
  }
}
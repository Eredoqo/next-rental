import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CarDto } from "@/app/Dto/CarDto";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: {
        Rentals: {
          include: {
            User: true,
            Car: true,
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
        car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          status: car.status,
          isNew: car.isNew,
          rentals: [],
          rates: [],
          carSpec: [],
          bookings: [],
        },
        user: {
          id: rental.User.id,
          email: rental.User.email,
          firstName: rental.User.firstName ?? undefined,
          lastName: rental.User.lastName ?? undefined,
          password: rental.User.password ?? undefined,
          createdAt: rental.User.createdAt ?? undefined,
          updatedAt: rental.User.updatedAt ?? undefined,
          bookings: [], 
          rentals: [], 
        },
      })),
      rates: car.Rates.map((rate) => ({
        id: rate.id,
        carId: rate.carId,
        dailyRate: rate.dailyRate,
        weeklyRate: rate.weeklyRate,
        car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          status: car.status,
          isNew: car.isNew,
          rentals: [],
          rates: [],
          carSpec: [],
          bookings: [],
        },
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
        createdAt: spec.createdAt,
        updatedAt: spec.updatedAt,
        car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          status: car.status,
          isNew: car.isNew,
          rentals: [],
          rates: [],
          carSpec: [],
          bookings: [],
        },
      })),
      bookings: car.bookings.map((booking) => ({
        id: booking.id,
        date: booking.date,
        userId: booking.user.id,
        carId: car.id,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          status: car.status,
          isNew: car.isNew,
          rentals: [],
          rates: [],
          carSpec: [],
          bookings: [],
        },
        user: {
          id: booking.user.id,
          email: booking.user.email,
          firstName: booking.user.firstName ?? undefined,
          lastName: booking.user.lastName ?? undefined,
          password: booking.user.password ?? undefined,
          createdAt: booking.user.createdAt ?? undefined,
          updatedAt: booking.user.updatedAt ?? undefined,
          bookings: [],
          rentals: [],
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
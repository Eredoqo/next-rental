import { NextResponse } from "next/server";
import carData from "../../utils/CarData";
import { CarItem } from "../../@types/CarTypes";
import { carArraySchema } from "../../utils/validations/carsValidation";

export async function GET() {
  try {
    const responseData: CarItem[] = carArraySchema.parse(carData);
    return NextResponse.json<CarItem[]>(responseData);
  } catch (error) {
    console.error("Error fetching car data:", error);
    return NextResponse.json(
      { message: "Error fetching car data" },
      { status: 500 }
    );
  }
}

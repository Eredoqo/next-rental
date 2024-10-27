import { NextResponse } from "next/server";
import blogData from "../../utils/BlogData";
import { Blog } from "../../@types/BlogTypes";
import { blogArraySchema } from "../../utils/validations/BlogValidations";

export async function GET() {
  try {
    const responseData: Blog[] = blogArraySchema.parse(blogData);
    return NextResponse.json<Blog[]>(responseData);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json(
      { message: "Error fetching blog data" },
      { status: 500 }
    );
  }
}

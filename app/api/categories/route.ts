import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route

    const categories = await prisma.category.findMany({
      include: {
        _count: true,
      },
    });

    return NextResponse.json(categories);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const { name } = await req.json();
    if (!name) return new NextResponse("Name is required", { status: 400 });

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

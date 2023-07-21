import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route

    const sizes = await prisma.size.findMany({
      include: {
        _count: true,
      },
    });

    return NextResponse.json(sizes);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const { name } = await req.json();
    if (!name) return new NextResponse("Name is required", { status: 400 });

    const size = await prisma.size.create({
      data: {
        name,
      },
    });

    return NextResponse.json(size);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

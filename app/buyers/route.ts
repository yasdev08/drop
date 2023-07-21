import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route

    const buyers = await prisma.buyer.findMany({
      include: {
        _count: true,
        orders: true,
      },
    });

    return NextResponse.json(buyers);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const body = await req.json();
    // todo: validate body
    const buyer = await prisma.buyer.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(buyer);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

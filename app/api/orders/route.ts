import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route

    const orders = await prisma.order.findMany({
      include: {
        _count: true,
        buyer: true,
        orderItems: {
          include: {
            product: true,
          },
        },
        seller: true,
      },
    });

    return NextResponse.json(orders);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const body = await req.json();
    // todo: validate body
    const order = await prisma.order.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(order);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

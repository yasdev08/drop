import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const products = await prisma.product.findMany({
      include: {
        Category: true,
        images: true,
        orderItems: true,
        Size: true,
      },
    });

    return NextResponse.json(products);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route
    const body = await req.json();
    //todo: validate body

    const product = await prisma.product.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { buyerId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.buyerId)
      return new NextResponse("Buyer ID is required", { status: 400 });

    const buyer = await prisma.buyer.findUnique({
      where: {
        id: params.buyerId,
      },
      include: {
        orders: true,
      },
    });

    return NextResponse.json(buyer);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { buyerId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.buyerId)
      return new NextResponse("Buyer ID is required", { status: 400 });

    const body = await req.json();
    // todo: validate body
    const buyer = await prisma.buyer.update({
      where: {
        id: params.buyerId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(buyer);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { buyerId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.buyerId)
      return new NextResponse("Buyer ID is required", { status: 400 });
    //todo: delete all relations to this buyer if any
    const buyer = await prisma.buyer.deleteMany({
      where: {
        id: params.buyerId,
      },
    });
    return NextResponse.json(buyer);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

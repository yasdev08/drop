import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.productId)
      return new NextResponse("Product ID is required", { status: 400 });

    const product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.productId)
      return new NextResponse("Product ID is required", { status: 400 });

    const body = await req.json();
    // todo: validate body

    const product = await prisma.product.update({
      where: {
        id: params.productId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.productId)
      return new NextResponse("Product ID is required", { status: 400 });
    //todo: delete all relations to this product if any
    const product = await prisma.product.deleteMany({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

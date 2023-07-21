import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { sizeId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.sizeId)
      return new NextResponse("Size ID is required", { status: 400 });

    const size = await prisma.size.findUnique({
      where: {
        id: params.sizeId,
      },
    });

    return NextResponse.json(size);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { sizeId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.sizeId)
      return new NextResponse("Size ID is required", { status: 400 });

    const { name } = await req.json();
    if (!name) return new NextResponse("Name is required", { status: 400 });

    const size = await prisma.size.update({
      where: {
        id: params.sizeId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(size);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { sizeId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.sizeId)
      return new NextResponse("Size ID is required", { status: 400 });
    //todo: delete all relations to this category if any
    const size = await prisma.size.deleteMany({
      where: {
        id: params.sizeId,
      },
    });

    return NextResponse.json(size);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

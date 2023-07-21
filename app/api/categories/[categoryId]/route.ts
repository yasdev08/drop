import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.categoryId)
      return new NextResponse("Category ID is required", { status: 400 });

    const category = await prisma.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.categoryId)
      return new NextResponse("Category ID is required", { status: 400 });

    const { name } = await req.json();
    if (!name) return new NextResponse("Name is required", { status: 400 });

    const category = await prisma.category.update({
      where: {
        id: params.categoryId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.categoryId)
      return new NextResponse("Category ID is required", { status: 400 });
    //todo: delete all relations to this category if any
    const category = await prisma.category.deleteMany({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

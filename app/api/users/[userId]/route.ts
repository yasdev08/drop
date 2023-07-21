import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.userId)
      return new NextResponse("User ID is required", { status: 400 });

    const user = await prisma.user.findUnique({
      where: {
        id: params.userId,
      },
      include: {
        balance: true,
        ccp: true,
        Orders: true,
        store: true,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.userId)
      return new NextResponse("User ID is required", { status: 400 });

    const body = await req.json();

    const user = await prisma.user.update({
      where: {
        id: params.userId,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    //todo: check if user is logged in and has permission to access this route

    if (!params.userId)
      return new NextResponse("User ID is required", { status: 400 });
    //todo: delete all relations to this user
    const user = await prisma.user.deleteMany({
      where: {
        id: params.userId,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

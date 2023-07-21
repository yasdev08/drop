import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //todo: check if user is logged in and has permission to access this route

    const users = await prisma.user.findMany({
      include: {
        _count: true,
        balance: true,
        ccp: true,
        Orders: true,
        store: true,
      },
    });

    return NextResponse.json(users);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}

import { ticketSchema } from "@/app/ValidationSchemas/ticket";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = ticketSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newTicket = await prisma.TicketDB.create({
    data: { ...body },
  });

  return NextResponse.json(newTicket, { status: 201 });
}

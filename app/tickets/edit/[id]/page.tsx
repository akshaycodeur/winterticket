import prisma from "@/prisma/db";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  params: { id: string };
}

// Use dynamic import to load TicketForm with SSR disabled
const TicketForm = dynamic(() => import("@/components/TicketFormNew"), {
  ssr: false,
});

const EditTicket = async ({ params }: Props) => {
  const ticket = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket not found!</p>;
  }

  return (
    <div>
      <TicketForm ticket={ticket} />
    </div>
  );
};

export default EditTicket;

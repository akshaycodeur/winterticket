import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import TicketPriorityBadge from "@/components/TicketPriorityBadge";

const Tickets = async () => {
  const tickets = await prisma.Ticket.findMany();
  console.log(tickets);

  return (
    <div className="w-full">
      <div className="rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets?.map((ticket) => (
              <TableRow key={ticket.id} data-href="/">
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <TicketStatusBadge status={ticket.status} />
                </TableCell>
                <TableCell>
                  {ticket.createdAt?.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </TableCell>{" "}
                <TableCell>
                  <TicketPriorityBadge priority={ticket.priority} />
                </TableCell>
                {/* Assuming createdAt is a Date object */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tickets;

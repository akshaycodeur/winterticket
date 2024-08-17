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

const Tickets = async () => {
  const tickets = await prisma.task.findMany();
  console.log(tickets);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets?.map((ticket) => (
            <TableRow key={ticket.id} data-href="/">
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>
                {ticket.createdAt?.toLocaleDateString()}
              </TableCell>{" "}
              {/* Assuming createdAt is a Date object */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tickets;

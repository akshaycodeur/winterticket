import React from "react";
import { Badge } from "./ui/badge";
import { TaskStatus } from "@prisma/client";

interface Props {
  status: TaskStatus;
}

const statusMap: Record<
  TaskStatus,
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  TODO: { label: "Open", color: "bg-red-400" },
  IN_PROGRESS: { label: "In Progress", color: "bg-blue-400" },
  DONE: { label: "Done", color: "bg-green-400" },
};

const TicketStatusBadge = ({ status }: Props) => {
  const { label, color } = statusMap[status];
  return <Badge className={`${color} hover:${color}`}>{label}</Badge>;
};

export default TicketStatusBadge;

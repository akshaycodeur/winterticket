import React from "react";
import { Badge } from "./ui/badge";
import { Priority } from "@prisma/client";

interface Props {
  priority: Priority;
}

const priorityMap: Record<
  Priority,
  { label: string; color: "bg-red-200" | "bg-red-400" | "bg-red-600" }
> = {
  LOW: { label: "Low", color: "bg-red-200" },
  MEDIUM: { label: "Medium", color: "bg-red-400" },
  HIGH: { label: "High", color: "bg-red-600" },
};

const TicketPriorityBadge = ({ priority }: Props) => {
  const { label, color } = priorityMap[priority];
  return (
    <Badge className={`${color} hover:${color} text-white font-semibold`}>
      {label}
    </Badge>
  );
};

export default TicketPriorityBadge;

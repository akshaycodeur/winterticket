import React from "react";
import { Task } from "@prisma/client";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  return <div>DataTable</div>;
};

export default DataTable;

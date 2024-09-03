import dynamic from "next/dynamic";
import React from "react";

// Use dynamic import to load TicketForm with SSR disabled
const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

const NewTicket = () => {
  return (
    <div className="max-w-xl mx-auto">
      <TicketForm />
    </div>
  );
};

export default NewTicket;

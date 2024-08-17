import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const MainNav = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/users">Users</Link>
      <ToggleMode />
    </div>
  );
};

export default MainNav;

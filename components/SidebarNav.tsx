import React from "react";

import {
  BackpackIcon,
  CalendarIcon,
  DashboardIcon,
  DashIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SidebarNav = () => {
  return (
    <Command className="rounded-lg border shadow-md max-w-xs h-screen bg-zinc-50 px-5">
      <h4 className="text-xl font-semibold p-4 uppercase ">Tech Tickets</h4>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation" className="">
          <CommandItem>
            <DashboardIcon className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem>
            <BackpackIcon className="mr-2 h-4 w-4" />
            <span>My Tasks</span>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Inbox</span>
          </CommandItem>
          <CommandItem>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Team</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SidebarNav;

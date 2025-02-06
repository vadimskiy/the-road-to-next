'use server';

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  "use server";

  await prisma.ticket.delete({
    where: { id },
  });

  redirect(ticketsPath())
};

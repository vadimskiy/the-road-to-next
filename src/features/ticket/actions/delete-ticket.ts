'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setCookie } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {
  "use server";

  await prisma.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath());
  setCookie("Toast", "Ticket deleted");
  redirect(ticketsPath())
};

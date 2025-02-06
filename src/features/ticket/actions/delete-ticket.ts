'use server';

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
  "use server";

  await prisma.ticket.delete({
    where: { id },
  });
};

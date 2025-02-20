'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { ActionState, fromErrorToActionState, toActionState } from "@/components/custom/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { setCookie } from "@/actions/cookies";

const upsertTicketSchema = z.object({
    title: z.string().min(1).max(191),
    content: z.string().min(1).max(1024),
});

export const upsertTicket = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {
    try {
        const data = upsertTicketSchema.parse({
            title: formData.get('title') as string,
            content: formData.get('content') as string,
        });
    
        await prisma.ticket.upsert({
            where: {
                id: id || "",
            },
            update: data,
            create: data,
        });
    } catch (error) {
        return fromErrorToActionState(error, formData);
    }

    revalidatePath(ticketsPath());
    
    if (id) {
        setCookie('Toast', 'Ticket updated');
        redirect(ticketPath(id));
    }

    return toActionState('SUCCESS', 'Ticket created');
};

import { notFound } from "next/navigation";
import { CardCompact } from "@/components/custom/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketEditParams = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketEditPage = async ({ params }: TicketEditParams) => {
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact
                title="Edit Ticket"
                description="Edit your ticket"
                className="w-full max-w-[420px] animate-fade-from-top"
                content={<TicketUpsertForm ticket={ticket} />}
            />
        </div>
    );
};

export default TicketEditPage;

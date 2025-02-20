import { notFound } from "next/navigation";
import { RedirectToast } from "@/components/custom/redirect-toast";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>

      <RedirectToast />
    </>
  );
};

export default TicketPage;

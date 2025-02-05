import Link from "next/link";
import { Placeholder } from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
    const ticket = await getTicket((await params).ticketId);

    if (!ticket) {
      return (
        <Placeholder
            label="Ticket not found"
            button={
              <Button asChild variant="outline">
                <Link href={ticketsPath()}>Go to Tickets</Link>
              </Button>
            }
          />
      );
        
    }

    return (
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    );
  };
  
  export default TicketPage;
  
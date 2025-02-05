import Link from "next/link";
import { Placeholder } from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
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

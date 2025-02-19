"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";
import { toast } from "sonner";
import { FieldError } from "@/components/custom/form/field-error";
import { useActionFeedback } from "@/components/custom/form/hooks/use-action-feedback";
import { SubmitButton } from "@/components/custom/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/custom/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [actionState, action] = useActionState(
        upsertTicket.bind(null, ticket?.id),
        EMPTY_ACTION_STATE
    );

    useActionFeedback(actionState, {
        onSuccess: ({ actionState }) => {
            if (actionState.message) {
                toast.success(actionState.message);
            }
        },
        onError: ({ actionState }) => {
            if (actionState.message) {
                toast.error(actionState.message);
            }
        },
    });

  return (
    <form
      action={action}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={(actionState.payload?.get('title') as string) ?? ticket?.title} />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={(actionState.payload?.get('content') as string) ?? ticket?.content} />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message && <p>{actionState.message}</p>}
    </form>
  );
};

export { TicketUpsertForm };

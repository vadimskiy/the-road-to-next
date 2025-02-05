'use client';

import { Placeholder } from "@/components/custom/placeholder";

export default function Error({ error }: { error: Error }) {
    return <Placeholder label={error.message || "Something went wrong!"} />;
}

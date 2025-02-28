"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
    const pathname = usePathname();

    useEffect(() => {
        const showCookieToast = async () => {
            const message = await getCookieByKey('Toast');

            if (message) {
                toast.success(message);
                await deleteCookieByKey('Toast');
            }
        };

        showCookieToast();
    }, [pathname]);

    return null;
};

export { RedirectToast };

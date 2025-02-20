"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {

    useEffect(() => {
        const showCookieToast = async () => {
            const message = await getCookieByKey('Toast');

            if (message) {
                toast.success(message);
                await deleteCookieByKey('Toast');
            }
        };

        showCookieToast();
    }, []);

    return null;
};

export { RedirectToast };

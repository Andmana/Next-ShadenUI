"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

function SubmitButton({ label }) {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                disabled={pending}
                type="submit"
                className="bg-blue-500 w-full"
            >
                {pending ? <Loader2 className="animate-spin" /> : label}
            </Button>
        </>
    );
}

export default SubmitButton;

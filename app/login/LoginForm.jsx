"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { login } from "./actions";
import InputGroup from "@/components/forms/InputGroup";
import PasswordInput from "@/components/forms/PasswordInput";
import SubmitButton from "@/components/forms/SubmitButton";
import ValidationMessage from "@/components/forms/ValidationMessage";

const LoginForm = () => {
    const [state, loginAction] = useActionState(login, undefined);

    return (
        <form action={loginAction}>
            <div className="flex flex-col gap-6">
                {/* Username */}
                <InputGroup label="Username">
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Input username"
                    />
                    {state?.errors?.username && (
                        <ValidationMessage message={state.errors.username} />
                    )}
                </InputGroup>
                {/* Password */}
                <InputGroup label="Password">
                    <PasswordInput />
                    {state?.errors?.password && (
                        <ValidationMessage message={state.errors.password} />
                    )}
                </InputGroup>

                <SubmitButton label="login" />
            </div>
        </form>
    );
};

export default LoginForm;

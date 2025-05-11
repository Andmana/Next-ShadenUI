"use client";

import Link from "next/link";
import { useActionState } from "react";
import InputGroup from "@/components/forms/InputGroup";
import PasswordInput from "@/components/forms/PasswordInput";
import SubmitButton from "@/components/forms/SubmitButton";
import { LogoIpsum } from "@/components/logo/Logo";
import { Input } from "@/components/ui/input";
import { login } from "./actions";
import ValidationMessage from "@/components/forms/ValidationMessage";

export default function Login() {
    const [state, loginAction] = useActionState(login, undefined);

    return (
        <div className="h-screen sm:h-svh flex justify-center items-center bg-gray-100 ">
            <main className="bg-white w-full sm:w-[400px] h-full sm:h-fit px-4 py-10 sm:rounded-xl flex flex-col gap-6 justify-center text-sm">
                {/*  */}
                {/* Logo */}
                <LogoIpsum />

                {/* Form */}
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
                                <p>{state.errors.username}</p>
                            )}
                        </InputGroup>
                        {/* Password */}
                        <InputGroup label="Password">
                            <PasswordInput />
                            <ValidationMessage
                                message={state?.error?.password}
                            />
                        </InputGroup>

                        <SubmitButton label="login" />
                    </div>
                </form>

                {/* Register Redirect */}
                <p className="text-center">
                    Don't have an account?{" "}
                    <Link
                        className="underline text-blue-600"
                        href={"/register"}
                    >
                        Register
                    </Link>
                </p>
            </main>
        </div>
    );
}

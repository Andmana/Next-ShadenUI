"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";
import axios from "axios";

const loginSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }).trim(),
    password: z.string().min(1, { message: "Password is required" }).trim(),
});

export async function login(prevState, formData) {
    console.log("formdata: ", formData);
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { username, password } = result.data;

    try {
        const apiRes = await axios.post(
            "https://test-fe.mysellerpintar.com/api/auth/login",
            { username, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 5000, // Add timeout
            }
        );
        const { token, role } = apiRes.data;
        await createSession({ username, role, token });
    } catch (error) {
        console.error("Login error:", error);
        const msg =
            error.response?.data?.message || "Invalid username or password";
        return {
            errors: {
                username: [msg],
            },
        };
    }
    redirect("/articles");
}

export async function logout() {
    await deleteSession();
    redirect("/login");
}

"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";
import { findUser, users } from "@/db/users";

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
    const user = findUser(username, password);
    if (!user) throw new Error("Invalid username or password");

    await createSession({
      username: user.username,
      role: user.role,
      token: user.token,
    });
  } catch (error) {
    console.error("Login error:", error);
    const msg = error.response?.data?.message || "Invalid username or password";
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

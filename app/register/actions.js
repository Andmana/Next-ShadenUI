"use server";

import { z } from "zod";
import axios from "axios";
import { findUser, users } from "@/db/users";
import { generateUUIDLike } from "@/lib/utils";

const registrationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
  role: z.enum(["User", "Admin"], {
    message: "Role must be 'User' or 'Admin'",
  }),
});

export async function register(prevState, formData) {
  console.log(formData);
  const result = registrationSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { username, password, role } = result.data;

  try {
    const user = findUser(username, password);
    if (user) throw new Error("Username already use");

    // Create new data
    users.push({
      username,
      password,
      role,
      token: generateUUIDLike(),
    });
  } catch (error) {
    console.error("Login error:", error);
    const msg =
      error.message || error.response?.data?.message || "Sign up fail";
    return {
      errors: {
        username: [msg],
      },
    };
  }
  return {
    success: true,
  };
}

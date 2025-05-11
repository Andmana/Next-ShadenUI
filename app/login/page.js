import Link from "next/link";
import { LogoIpsum } from "@/components/logo/Logo";
import LoginForm from "./LoginForm";
import RedirectSign from "@/components/forms/RedirectSign";

export default function Login() {
  return (
    <div className="h-screen sm:h-svh flex justify-center items-center bg-gray-100 ">
      <main className="bg-white w-full sm:w-[400px] h-full sm:h-fit px-4 py-10 sm:rounded-xl flex flex-col gap-6 justify-center text-sm">
        {/*  */}
        {/* Logo */}
        <LogoIpsum />

        {/* Form */}
        <LoginForm />

        {/* Register Redirect */}
        <RedirectSign href="Register">Don't have an account?</RedirectSign>
      </main>
    </div>
  );
}

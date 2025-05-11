import Link from "next/link";
import { LogoIpsum } from "@/components/logo/Logo";
import RegisterForm from "./RegisterForm";
import RedirectSign from "@/components/forms/RedirectSign";

export default function Register() {
  return (
    <div className="h-screen sm:h-svh flex justify-center items-center bg-gray-100 ">
      <main className="bg-white w-full sm:w-[400px] h-full sm:h-fit px-4 py-10 sm:rounded-xl flex flex-col gap-6 justify-center text-sm">
        {/*  */}
        {/* Logo */}
        <div className="flex justify-center items-center">
          <LogoIpsum />
        </div>

        {/* Form */}
        <RegisterForm />

        {/* Login Redirect */}
        <RedirectSign href="Login">Already have an Account?</RedirectSign>
      </main>
    </div>
  );
}

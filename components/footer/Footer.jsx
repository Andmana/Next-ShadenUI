import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-25 flex justify-center items-center bg-[#2563EBDB]">
      <div className="flex gap-4">
        <Image
          src="/logo-ipsum-white.svg"
          alt="Logo"
          width={134}
          height={134}
          style={{ width: 134, height: "auto" }}
          priority
        />
        <p className="text-base text-white">
          © 2025 Blog genzet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

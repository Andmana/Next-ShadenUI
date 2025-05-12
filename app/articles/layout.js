import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function ArticlesLayout({ children }) {
  return (
    <div className="relative min-h-screen sm:min-h-svh text-sm flex flex-col">
      {children}

      <Footer />
    </div>
  );
}

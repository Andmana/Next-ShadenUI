import Image from "next/image";
import SearchArticles from "../Search/SearchArticles";

export default function Hero() {
  return (
    <header className="relative w-full h-[560px] sm:h-[500px] bg-blue-500">
      <Image
        src="/bg-hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover bg-[#2564ebcc]"
      />
      <div className="absolute w-full h-full bg-[#2564ebcc]"></div>

      <div className="absolute top-[138.5px] left-1/2 w-[337px] sm:w-full max-w-[730px] transform -translate-x-1/2 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-white text-center">
          <p className="font-bold text-sm sm:text-base">Blog genzet</p>
          <h1 className="font-medium text-4xl sm:text-5xl">
            The Journal : Design Resources, Interviews, and Industry News
          </h1>
          <p className="text-xl sm:text-2xl">
            Your daily dose of design insights!
          </p>
        </div>

        <SearchArticles />
      </div>
    </header>
  );
}

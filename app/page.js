import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-4 ">
      <h1>ARCHIVO</h1>
      <div className="flex gap-4 h-10 items-center">
        <Link href={"/profile"}>Profile</Link>
        <Separator className={"h-full"} orientation="vertical" />
        <Link href={"/articles"}>Articles</Link>
      </div>
    </div>
  );
}

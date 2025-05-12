import Image from "next/image";
import { verifySession } from "@/lib/sessions";
import { LogoIpsum } from "../logo/Logo";
import ProfilePopper from "./ProfilePopper";
import { cn } from "@/lib/utils";

const Navbar = async ({ className }) => {
  const session = await verifySession();
  const username = session.username;

  return (
    <nav
      className={cn(
        className,
        "static z-10 top-0 left-0 w-full py-4 px-5 sm:py-8 sm:px-15 bg-white flex items-center justify-between"
      )}
    >
      <LogoIpsum />

      <ProfilePopper>
        {/* User Profile  */}
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-full bg-[#BFDBFE] flex justify-center items-center ">
            <span className="text-base font-medium">
              {username[0].toUpperCase()}
            </span>
          </div>
          <span className="hidden sm:block text-white underline">
            {/* Dynamic name */}
            {username}
          </span>
        </div>
      </ProfilePopper>
    </nav>
  );
};

export default Navbar;

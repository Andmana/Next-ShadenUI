import { LogoIpsum } from "../logo/Logo";
import ProfilePopper from "./ProfilePopper";
import { cn } from "@/lib/utils";

const Navbar = ({ className }) => {
  return (
    <nav
      className={cn(
        className,
        "static z-10 top-0 left-0 w-full py-4 px-5 sm:py-8 sm:px-15 bg-white flex items-center justify-between"
      )}
    >
      <LogoIpsum />

      <ProfilePopper />
    </nav>
  );
};

export default Navbar;

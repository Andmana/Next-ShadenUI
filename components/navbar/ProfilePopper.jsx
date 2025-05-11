import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut } from "lucide-react";
import Link from "next/link";
import LogOutAlert from "./LogOutAlert";

const ProfilePopper = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">{children}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[224px] border-1 text-sm">
        <div className="p-1.25 h-10 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <Link href="/profile" className="text-slate-600">
            My Account
          </Link>
        </div>

        <span className="h-[3px] w-full bg-slate-400" />

        <LogOutAlert />
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopper;

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import LogOutAlert from "./LogOutAlert";
import { verifySession } from "@/lib/sessions";

const ProfilePopper = async () => {
  const session = await verifySession();
  const username = session.username;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-[#BFDBFE] flex justify-center items-center ">
              <span className="text-base font-medium">
                {username[0].toUpperCase()}
              </span>
            </div>
            <span className="hidden sm:block text-black underline">
              {/* Dynamic name */}
              {username}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[224px] border-1 text-sm">
        <div className="p-1.25 h-10 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center">
          <Link href="/profile" className="text-slate-600 ">
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

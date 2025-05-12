import Link from "next/link";
import { LogoIpsum } from "../logo/Logo";
import LogOutAlert from "../navbar/LogOutAlert";
import { Newspaper } from "lucide-react";
import { Tag } from "lucide-react";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[267px] bg-blue-600 py-6 pb-4">
      <div className="flex flex-col gap-6">
        <Link className="relative px-8 flex justify-start" href={"/"}>
          <LogoIpsum isWhhite={true} />
        </Link>

        <nav className="px-4">
          <ul className="flex flex-col gap-2 text-white font-medium text-base">
            <SidebarNavigation label={"Articles"}>
              <Newspaper color="white" size={16} />
            </SidebarNavigation>
            <SidebarNavigation label={"Articles"}>
              <Tag color="white" size={16} />
            </SidebarNavigation>

            <LogOutAlert>
              <li className="h-10 hover:bg-blue-500 border-md pt-2 ps-4 rounded-md">
                <button className=" w-full flex gap-1.5 items-center">
                  <LogOut size={16} color="white" />
                  <label>Log Out</label>
                </button>
              </li>
            </LogOutAlert>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const SidebarNavigation = ({ children, label }) => {
  return (
    <li className="h-10 hover:bg-blue-500 border-md pt-2 ps-4 rounded-md">
      <Link
        className=" w-full flex gap-1.5 items-center"
        href={`/${label.toString().toLowerCase()}`}
      >
        {children} <label>{label}</label>
      </Link>
    </li>
  );
};

export default Sidebar;

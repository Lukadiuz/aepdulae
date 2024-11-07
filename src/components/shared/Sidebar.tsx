import React from "react";
import { links } from "../../store/mockData";
import LinkItem from "./LinkItem";
import { Avatar, Button } from "antd";
import Buttons from "../button/Buttons";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`transition-all-elements fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-zinc-200 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full px-3 pb-4 overflow-y-auto">
        <ul className="flex-1 space-y-2 font-medium">
          {links.map((link, idx) => (
            <LinkItem key={idx} {...link} />
          ))}
        </ul>

        <span className="text-slate-600 pb-3 dark:text-white w-full flex justify-center items-center gap-2">
          <Avatar className="bg-white text-slate-600 text-lg">A</Avatar>
          <span>ADMIN</span>
        </span>
        <div className="w-full flex justify-center">
          {/* <Button className=" w-40 text-slate-600 text-lg font-bold bg-zinc-300">
            Logout
          </Button> */}
          <Buttons />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

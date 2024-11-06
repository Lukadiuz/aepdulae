import React from "react";
import { LinkType } from "../../store/mockData";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface LinkItemProps extends LinkType {
  href: string;
  icon: IconType;
  text: string;
  //   badge?: undefined;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  icon: Icon,
  text,
  //   badge,
}) => {
  return (
    <li>
      <NavLink
        to={href}
        className="aria-[current=page]:bg-sky-700 aria-[current=page]:text-white flex items-center p-2 text-slate-600 rounded-lg hover:text-white hover:bg-sky-700 dark:text-white  dark:hover:bg-sky-700"
      >
        <Icon className="mr-3" />
        <span className="flex-1 me-3">{text}</span>
        {/* {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge["color"]} ${badge["darkColor"]}`}
          >
            {badge[`text`]}
          </span>
        )} */}
      </NavLink>
    </li>
  );
};

export default LinkItem;

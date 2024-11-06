import { IconType } from "react-icons";
import {FaChartBar, FaCheckDouble, FaCog, FaListUl, FaRegCalendarCheck, FaRegNewspaper, FaTags, FaUserTie, FaUsers } from "react-icons/fa";

export interface LinkType {
    href: string;
    icon: IconType;
    text: string;
}

export const links: LinkType[] = [
    {
        href: '#',
        icon: FaChartBar,
        text: 'Dashboard'
    },
    {
        href: '#',
        icon: FaListUl,
        text: 'Work Orders'
    },
    {
        href: '#',
        icon: FaRegCalendarCheck,
        text: 'Booking'
    },
    {
        href: '#',
        icon: FaUserTie,
        text: 'Bringers'
    },
    {
        href: '#',
        icon: FaUsers,
        text: 'Users'
    },
    {
        href: '#',
        icon: FaRegNewspaper,
        text: 'News'
    },
    {
        href: '#',
        icon: FaTags,
        text: 'Promotion'
    },
    {
        href: '#',
        icon: FaCheckDouble,
        text: 'Checklist Template'
    },
    {
        href: '#',
        icon: FaCog,
        text: 'Setting'
    }
];
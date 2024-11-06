import { IconType } from "react-icons";
import {FaChartBar, FaCheckDouble, FaCog, FaListUl, FaRegCalendarCheck, FaRegNewspaper, FaTags, FaUserTie, FaUsers } from "react-icons/fa";

export interface LinkType {
    href: string;
    icon: IconType;
    text: string;
}

export const links: LinkType[] = [
    {
        href: '/',
        icon: FaChartBar,
        text: 'Dashboard'
    },
    {
        href: '/work-orders',
        icon: FaListUl,
        text: 'Work Orders'
    },
    {
        href: '/booking',
        icon: FaRegCalendarCheck,
        text: 'Booking'
    },
    {
        href: '/bringers',
        icon: FaUserTie,
        text: 'Bringers'
    },
    {
        href: '/users',
        icon: FaUsers,
        text: 'Users'
    },
    {
        href: '/news',
        icon: FaRegNewspaper,
        text: 'News'
    },
    {
        href: '/promotion',
        icon: FaTags,
        text: 'Promotion'
    },
    {
        href: '/checklist',
        icon: FaCheckDouble,
        text: 'Checklist Template'
    },
    {
        href: '/setting',
        icon: FaCog,
        text: 'Setting'
    }
];
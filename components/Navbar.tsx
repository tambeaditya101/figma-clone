"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";

import ActiveUsers from "./user/ActiveUser";

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <Image src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />

      <ul className="flex flex-row">
        {navElements.map((item: ActiveElement | any) => (
          <li key={item.name}></li>
        ))}
      </ul>

      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);

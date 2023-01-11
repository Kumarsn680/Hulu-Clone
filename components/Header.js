import Image from 'next/image';
import React from 'react'
import huluLogo from "../public/hulu-logo.svg";
import HeaderItem from './HeaderItem';
import { HomeIcon,CheckBadgeIcon,BoltIcon,MagnifyingGlassIcon,UserIcon, RectangleStackIcon } from "@heroicons/react/24/outline";


const Header = () => {
  return (
      <header className="flex flex-col h-auto items-center justify-between sm:flex-row m-5 justify-between ">
        <div className="left flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem name="HOME" Icon={HomeIcon} />
          <HeaderItem name="TRENDING" Icon={BoltIcon} />
          <HeaderItem name="VERIFIED" Icon={CheckBadgeIcon} />
          <HeaderItem name="COLLECTIONS" Icon={RectangleStackIcon} />
          <HeaderItem name="SEARCH" Icon={MagnifyingGlassIcon} />
          <HeaderItem name="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          className="object-contain"
          src={huluLogo}
          width={100}
          height={100}
          alt="image not found"
        />
      </header>
  );
}

export default Header
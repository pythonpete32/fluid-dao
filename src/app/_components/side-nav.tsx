"use client";

import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../public/SuperfluidLogo.svg";
import { ConnectButton } from "../../components/ConnectButton";
import { navigation } from "~/config/navigation";

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-96 py-6 flex flex-col justify-between overflow-y-auto drop-shadow-md min-h-screen">
      <div className="pl-6 cursor-pointer">
        <Link legacyBehavior href="/" passHref>
          <a className="flex px-2">
            <Image src={Logo} alt={"Logo"} />
          </a>
        </Link>
      </div>
      <ul className="menu p-4 overflow-y-auto text-base-400 grow">
        {navigation.map((item: any) => (
          <li className="mt-1 relative py-2" key={item.href}>
            {item.href.charAt(0) === "/" ? (
              <Link legacyBehavior href={item.href}>
                <a className={`py-4 ${pathname == item.href ? "active" : ""}`}>
                  {item.icon}
                  {item.name}
                  <ChevronRightIcon className="h-5 w-5 absolute right-4 opacity-50" />
                </a>
              </Link>
            ) : (
              <a
                className={`py-4 ${pathname == item.href ? "active" : ""}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                {item.name}
                <ArrowTopRightOnSquareIcon className="h-5 w-5 absolute right-4 opacity-50" />
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mx-auto">
        <ConnectButton chainStatus={"icon"} accountStatus="avatar" />
      </div>
    </div>
  );
};

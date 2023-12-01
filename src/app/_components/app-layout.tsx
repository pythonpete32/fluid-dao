"use client";

import { ReactNode } from "react";
import Providers from "~/app/_components/providers";
import { MainView } from "./main-view";
import { SideNav } from "./side-nav";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <div className="mx-auto flex flex-grow">
        <SideNav />
        <MainView>{children}</MainView>
      </div>
    </Providers>
  );
};

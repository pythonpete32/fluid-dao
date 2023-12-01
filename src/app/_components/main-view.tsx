import { FC, ReactNode } from "react";

export const MainView: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 lg:static pt-24 w-screen max-h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="hero-content">{children}</div>
      </div>
    </div>
  );
};

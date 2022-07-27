import React, { FC, useContext, useEffect } from "react";
import { Navbar } from "..";
interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-blue-900 w-full h-screen">
      <Navbar/>
      <div className="p-4 w-full">
        {children}
      </div>
    </div>
  );
};
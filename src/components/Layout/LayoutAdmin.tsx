import React, { FC, useContext, useEffect } from "react";
import { Layout } from "./Layout";
import { Navbar, AdminDrawer } from '..';

interface Props {
  children: React.ReactNode;
}

export const LayoutAdmin: FC<Props> = ({ children }) => {
    return (
        <div className="h-screen">
            {/* <div className="bg-gray-800 w-screen h-screen"> */}
                {/* <Navbar /> */}
                <AdminDrawer children={children}  />
            {/* </div> */}
        </div>
    )
};
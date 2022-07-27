import React, { FC, useContext, useEffect } from "react";
import { Layout } from "./Layout";
interface Props {
  children: React.ReactNode;
}

export const LayoutHome: FC<Props> = ({ children }) => {
  return (
    <Layout>
        <div className="p-4 w-full">
            {children}
        </div>
    </Layout>
  );
};
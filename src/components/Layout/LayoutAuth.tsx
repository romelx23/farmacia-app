import React, { FC } from 'react'
import { NavbarAuth } from '../ui/Navbar/NavbarAuth';
interface Props {
    children: React.ReactNode;
  }
export const LayoutAuth: FC<Props> = ({children}) => {
  return (
    <div className="bg-blue-900 w-full h-screen">
      <NavbarAuth/>
      <div className="p-4 w-full text-white">
        {children}
      </div>
    </div>
  )
}

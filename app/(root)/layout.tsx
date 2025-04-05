import Navbar from "@/components/navigation/navbar";
import DesktopNav from "@/components/navigation/LeftSidebar";
import React, { ReactNode } from "react";
import RightSidebar from "@/components/navigation/RightSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light-850_dark100 relative">
      <Navbar />
      <div className="flex">
        <DesktopNav />
        <div className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </div>
        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;

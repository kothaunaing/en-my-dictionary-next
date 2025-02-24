import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="p-3 border-b sticky top-0 inset-x-0 bg-black">
        <div className="mb-3 sm:mb-0 flex items-center gap-1">
          <Link className="text-blue-600" href={"/"}>
            <HomeIcon />
          </Link>
          <Link href={`/mm-spelling`}>
            <h1 className="font-bold text-xl">{" | "} Myanmar Spelling</h1>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;

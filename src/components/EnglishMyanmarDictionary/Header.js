"use client";

import { HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Recommendations from "./Recommendations";

const Header = ({ title, dictType }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openRecommends, setOpenRecommends] = useState(false);

  const router = useRouter();

  const searchWord = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setOpenRecommends(false);
    router.push(`/${dictType}/word?query=${searchQuery}`);
  };

  return (
    <header className="sm:flex items-start p-3 justify-between gap-2 bg-black/60 sticky inset-x-0 top-0 z-10 backdrop-blur-md sm:rounded-md border-b">
      <div className="mb-3 sm:mb-0 flex items-center gap-1">
        <Link className="text-blue-600" href={"/"}>
          <HomeIcon />
        </Link>
        <Link href={`/${dictType}`}>
          <h1 className="font-bold text-xl">
            {" | "} {title}
          </h1>
        </Link>
      </div>
      <form className="sm:flex-1 sm:max-w-[400px]" onSubmit={searchWord}>
        <div className="rounded-lg flex items-center w-full gap-2 relative border ">
          <input
            onFocus={() => setOpenRecommends(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none border-none p-3 h-full w-full"
          />
          <button className="p-3 rounded-tr-md rounded-br-md bg-blue-600 hover:opacity-70">
            <SearchIcon />
          </button>

          <Recommendations
            dictType={dictType}
            query={searchQuery}
            open={openRecommends}
            setOpen={setOpenRecommends}
            setQuery={setSearchQuery}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;

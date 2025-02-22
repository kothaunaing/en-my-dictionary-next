"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Recommendations from "./Recommendations";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openRecommends, setOpenRecommends] = useState(false);

  const router = useRouter();

  const searchWord = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    router.push(`/word?query=${searchQuery}`);
  };

  return (
    <header className="p-3 border-b border-b-slate-700 bg-black sticky inset-x-0 top-0 z-10 flex items-center justify-between">
      <div className="">
        <Link href={`/`}>
          <h1 className="font-bold text-xl">En-My Dictionary</h1>
        </Link>
      </div>
      <form onSubmit={searchWord}>
        <div className="flex gap-2 border-b p-1 relative">
          <SearchIcon />
          <input
            onFocus={() => setOpenRecommends(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none border-none p-1 h-full w-full"
          />
          <Recommendations
            query={searchQuery}
            open={openRecommends}
            setOpen={setOpenRecommends}
          />
        </div>
      </form>
    </header>
  );
};

export default Header;

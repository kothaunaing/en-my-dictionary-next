import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="p-2 flex justify-center border-b-2 border-b-slate-600">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">MyLexicon</h1>
      </Link>
    </header>
  );
};

export default MainHeader;

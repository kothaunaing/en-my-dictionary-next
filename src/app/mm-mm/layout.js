import Header from "@/components/EnglishMyanmarDictionary/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header title={"Myanmar Dictionary"} dictType={"mm-mm"} />
      {children}
    </div>
  );
};

export default Layout;

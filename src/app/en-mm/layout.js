import Header from "@/components/EnglishMyanmarDictionary/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header title={"En-MM Dictionary"} dictType={"en-mm"} />
      {children}
    </div>
  );
};

export default Layout;

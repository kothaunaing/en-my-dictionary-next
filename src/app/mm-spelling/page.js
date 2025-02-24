import Alphabets from "@/components/MyanmarSpelling/Alphabets";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyanmarSpelling = async () => {
  return (
    <div>
      <Alphabets title={"သတ်ပုံကျမ်း ဗျည်းစဉ်"} path={"spelling-alphabets"} />
      {/* <Alphabets title={"ခွဲထား ဗျည်းစဉ်"} path={"khwehta"} /> */}
    </div>
  );
};

export default MyanmarSpelling;

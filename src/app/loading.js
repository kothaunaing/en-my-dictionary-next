import { LoaderIcon } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[200px] flex justify-center items-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default loading;

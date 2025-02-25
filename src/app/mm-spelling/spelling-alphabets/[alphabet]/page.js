import { apiUrl } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SpellingAlphabet = async ({ params }) => {
  try {
    const { alphabet } = await params;

    const response = await fetch(`${apiUrl}/api/spelling/alphabet/${alphabet}`);

    const data = await response.json();

    return (
      <div className="grid grid-cols-3 md:grid-cols-4 justify-center gap-2">
        {data.map((word) => {
          return (
            <Link
              key={word.AlphabeticalCharacterId}
              href={`/mm-spelling/spelling-alphabets/${alphabet}/${word.AlphabeticalCharacterValue}`}
              className="p-3 flex justify-center items-center hover:bg-blue-100 hover:text-black"
            >
              {word.AlphabeticalCharacterValue}
            </Link>
          );
        })}
      </div>
    );
  } catch (error) {
    return (
      <div className="h-[200px] flex justify-center items-center text-red-600">
        Error fetch data!
      </div>
    );
  }
};

export default SpellingAlphabet;

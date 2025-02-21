import { getCurrentUrl } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import React from "react";

export async function generateMetadata({ searchParams }, parent) {
  const { query } = await searchParams;

  if (parent.found) {
    return {
      title: `En-My Dictionary | ${query}`,
      description: `Definitions for ${query}`,
    };
  } else {
    return {
      title: `Word not found for '${query}'`,
      description: `Word not found for ${query}`,
    };
  }
}

const Word = async ({ searchParams }) => {
  const { query } = await searchParams;

  const response = await fetch(
    `https://enmydictionaryapi.onrender.com/word/${query}`
  );

  const results = await response.json();

  console.log(results);

  if (results) {
    generateMetadata({ searchParams }, { found: true });
    return (
      <div className="m-2 space-y-4">
        <div>
          <div>
            <h1 className="font-bold text-3xl">{results.word}</h1>
          </div>
          <div
            className="break-words whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{ __html: results.definition }}
          />
        </div>
      </div>
    );
  } else {
    generateMetadata({ searchParams }, { found: false });
    return (
      <div className="h-[200px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <InfoIcon className="text-orange-500" />
          <span className="font-semibold">
            Word not found for <span className="italic">'{query}'</span>
          </span>
        </div>
      </div>
    );
  }
};

export default Word;

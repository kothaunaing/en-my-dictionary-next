import Link from "next/link";
import React from "react";

const MyanmarEnglish = ({ results }) => {
  return (
    <div className="m-2 space-y-4">
      {results.map((word) => {
        return (
          <div key={word.id}>
            <h1 className="font-bold text-xl">
              {word.word}
              {word.serial && <sup>{word.serial}</sup>}
              <span className="font-normal text-base italic ml-1">
                {word.part_of_speech}
              </span>
            </h1>
            <p className="my-1"> /{word.phonetics}/</p>
            <p
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: word.meaning.replaceAll("\\n", "<br />"),
              }}
            />
            {word.refer && (
              <Link
                className="text-blue-600 font-bold"
                href={`/en-mm/word?query=${word.refer}`}
              >
                {word.refer}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyanmarEnglish;

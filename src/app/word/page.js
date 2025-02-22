import { InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { query } = await searchParams;

  return {
    title: `En-My Dictionary | ${query}`,
    description: `Definitions for ${query}`,
  };
}

const Word = async ({ searchParams }) => {
  const { query } = await searchParams;

  try {
    const response = await fetch(
      `https://enmydictionaryapi.onrender.com/api/word/${query}`
    );

    const data = await response.json();

    console.log(data);

    if (data.results?.length > 0) {
      if (data.type === "en-mm") {
        return (
          <div className="m-2 space-y-4">
            {data.results.map((word) => {
              return (
                <div key={word._id}>
                  <div>
                    <h1 className="font-bold text-3xl">{word.word}</h1>
                  </div>
                  <div
                    className="break-words whitespace-pre-wrap leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: word.definition }}
                  />
                </div>
              );
            })}
          </div>
        );
      } else {
        return (
          <div className="m-2 space-y-4">
            {data.results.map((word) => {
              return (
                <div key={word.id}>
                  <h1 className="font-bold text-xl">
                    {word.word}
                    {word.serial && <sup>{word.serial}</sup>}
                    <span className="font-normal text-base italic ml-1">
                      {word.part_of_speech}
                    </span>
                  </h1>
                  <p> /{word.phonetics}/</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: word.meaning.replaceAll("\\n", "<br />"),
                    }}
                  />
                  {word.refer && (
                    <Link
                      className="text-blue-600 font-bold"
                      href={`/word?query=${word.refer}`}
                    >
                      {word.refer}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      }
    } else {
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
  } catch (error) {
    console.log("Error fetching data..");

    return (
      <div className="h-[200px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <InfoIcon className="text-orange-500" />
          <span className="font-semibold">
            Server is restarting. Please wait a second and refresh
          </span>
        </div>
      </div>
    );
  }
};

export default Word;

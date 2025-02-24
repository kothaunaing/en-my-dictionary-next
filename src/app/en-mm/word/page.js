import MyanmarEnglish from "@/components/EnglishMyanmarDictionary/MyanmarEnglish";
import { apiUrl } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { query } = await searchParams;

  return {
    title: `En-My Dictionary | ${query.trim()}`,
    description: `Definitions for ${query.trim()}`,
  };
}

const Word = async ({ searchParams }) => {
  const { query } = await searchParams;

  try {
    const response = await fetch(
      `${apiUrl}/api/dictionary/word/en-mm/${query.trim()}`
    );

    const data = await response.json();

    // console.log(data);

    if (data?.results?.length > 0) {
      if (data.type === "en-mm") {
        return (
          <div className="m-2">
            <h2 className="font-bold text-3xl mb-2">{data.results[0].word}</h2>
            <div className="space-y-4">
              {data.results.map((word) => {
                return (
                  <div key={word._id}>
                    <div
                      className=" leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: word.definition }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return <MyanmarEnglish results={data.results} />;
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

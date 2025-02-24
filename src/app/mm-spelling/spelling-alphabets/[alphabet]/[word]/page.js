import { apiUrl } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Words = async ({ params }) => {
  try {
    const { word, alphabet } = await params;

    const response = await fetch(`${apiUrl}/api/spelling/word/${word}`);
    const data = await response.json();

    return (
      <div className="m-2">
        <div className="font-bold text-lg my-3">
          <Link
            className="underline text-blue-700"
            href={`/mm-spelling/spelling-alphabets/${alphabet}`}
          >
            {decodeURIComponent(alphabet)}
          </Link>{" "}
          / {decodeURIComponent(word)}
        </div>
        <div className="space-y-2">
          {data.words.map((word) => {
            return <div key={word.OrthographyId}>{word.HeadWord}</div>;
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

export default Words;

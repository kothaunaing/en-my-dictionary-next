import Link from "next/link";
import React from "react";

const alphabets = [
  {
    BurmeseCharacterId: 1,
    BurmeseCharacterValue: "က",
    BurmeseCharacterOrder: 1,
  },
  {
    BurmeseCharacterId: 2,
    BurmeseCharacterValue: "ခ",
    BurmeseCharacterOrder: 2,
  },
  {
    BurmeseCharacterId: 3,
    BurmeseCharacterValue: "ဂ",
    BurmeseCharacterOrder: 3,
  },
  {
    BurmeseCharacterId: 4,
    BurmeseCharacterValue: "ဃ",
    BurmeseCharacterOrder: 4,
  },
  {
    BurmeseCharacterId: 5,
    BurmeseCharacterValue: "င",
    BurmeseCharacterOrder: 5,
  },
  {
    BurmeseCharacterId: 6,
    BurmeseCharacterValue: "စ",
    BurmeseCharacterOrder: 6,
  },
  {
    BurmeseCharacterId: 7,
    BurmeseCharacterValue: "ဆ",
    BurmeseCharacterOrder: 7,
  },
  {
    BurmeseCharacterId: 8,
    BurmeseCharacterValue: "ဇ",
    BurmeseCharacterOrder: 8,
  },
  {
    BurmeseCharacterId: 9,
    BurmeseCharacterValue: "ဈ",
    BurmeseCharacterOrder: 9,
  },
  {
    BurmeseCharacterId: 10,
    BurmeseCharacterValue: "ည",
    BurmeseCharacterOrder: 10,
  },
  {
    BurmeseCharacterId: 11,
    BurmeseCharacterValue: "ဋ",
    BurmeseCharacterOrder: 11,
  },
  {
    BurmeseCharacterId: 12,
    BurmeseCharacterValue: "ဌ",
    BurmeseCharacterOrder: 12,
  },
  {
    BurmeseCharacterId: 13,
    BurmeseCharacterValue: "ဍ",
    BurmeseCharacterOrder: 13,
  },
  {
    BurmeseCharacterId: 14,
    BurmeseCharacterValue: "ဎ",
    BurmeseCharacterOrder: 14,
  },
  {
    BurmeseCharacterId: 15,
    BurmeseCharacterValue: "ဏ",
    BurmeseCharacterOrder: 15,
  },
  {
    BurmeseCharacterId: 16,
    BurmeseCharacterValue: "တ",
    BurmeseCharacterOrder: 16,
  },
  {
    BurmeseCharacterId: 17,
    BurmeseCharacterValue: "ထ",
    BurmeseCharacterOrder: 17,
  },
  {
    BurmeseCharacterId: 18,
    BurmeseCharacterValue: "ဒ",
    BurmeseCharacterOrder: 18,
  },
  {
    BurmeseCharacterId: 19,
    BurmeseCharacterValue: "ဓ",
    BurmeseCharacterOrder: 19,
  },
  {
    BurmeseCharacterId: 20,
    BurmeseCharacterValue: "န",
    BurmeseCharacterOrder: 20,
  },
  {
    BurmeseCharacterId: 21,
    BurmeseCharacterValue: "ပ",
    BurmeseCharacterOrder: 21,
  },
  {
    BurmeseCharacterId: 22,
    BurmeseCharacterValue: "ဖ",
    BurmeseCharacterOrder: 22,
  },
  {
    BurmeseCharacterId: 23,
    BurmeseCharacterValue: "ဗ",
    BurmeseCharacterOrder: 23,
  },
  {
    BurmeseCharacterId: 24,
    BurmeseCharacterValue: "ဘ",
    BurmeseCharacterOrder: 24,
  },
  {
    BurmeseCharacterId: 25,
    BurmeseCharacterValue: "မ",
    BurmeseCharacterOrder: 25,
  },
  {
    BurmeseCharacterId: 26,
    BurmeseCharacterValue: "ယ",
    BurmeseCharacterOrder: 26,
  },
  {
    BurmeseCharacterId: 27,
    BurmeseCharacterValue: "ရ",
    BurmeseCharacterOrder: 27,
  },
  {
    BurmeseCharacterId: 28,
    BurmeseCharacterValue: "လ",
    BurmeseCharacterOrder: 28,
  },
  {
    BurmeseCharacterId: 29,
    BurmeseCharacterValue: "ဝ",
    BurmeseCharacterOrder: 29,
  },
  {
    BurmeseCharacterId: 30,
    BurmeseCharacterValue: "သ",
    BurmeseCharacterOrder: 30,
  },
  {
    BurmeseCharacterId: 31,
    BurmeseCharacterValue: "ဟ",
    BurmeseCharacterOrder: 31,
  },
  {
    BurmeseCharacterId: 32,
    BurmeseCharacterValue: "ဠ",
    BurmeseCharacterOrder: 32,
  },
  {
    BurmeseCharacterId: 33,
    BurmeseCharacterValue: "အ",
    BurmeseCharacterOrder: 33,
  },
];

const Alphabets = ({ title, path }) => {
  return (
    <div className="m-2 grid justify-center">
      <div className="mb-2">
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      <div className="w-full grid justify-center grid-cols-5">
        {alphabets.map((alphabet) => {
          return (
            <Link
              className="p-4 flex items-center justify-center font-bold text-xl hover:bg-blue-100 hover:text-black"
              key={alphabet.BurmeseCharacterId}
              href={`/mm-spelling/${path}/${alphabet.BurmeseCharacterValue}`}
            >
              {alphabet.BurmeseCharacterValue}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Alphabets;

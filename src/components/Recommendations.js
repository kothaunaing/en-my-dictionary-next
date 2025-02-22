"use client";

import { debounce } from "lodash";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Recommendations = ({ query, open, setOpen, setQuery }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedQuery(query);
    }, 300);

    handler();

    return () => handler.cancel();
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery.trim()) return;

    const fetchWords = async () => {
      setLoading(true);
      setError(null);
      if (!open) setOpen(true);

      try {
        const response = await fetch(
          `https://enmydictionaryapi.onrender.com/api/word-recommend/${debouncedQuery.trim()}?limit=20`
        );

        if (!response.ok) {
          setWords([]);
          return console.log("No recommendations found!");
        }

        const data = await response.json();
        setWords(data.results);
      } catch (error) {
        setError(error.message);
        setWords([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, [debouncedQuery]);

  if (debouncedQuery.trim() && words.length > 0 && open) {
    return (
      <div ref={popupRef} className="absolute top-full w-full">
        <div className="border p-2 bg-black max-h-[300px] overflow-y-auto">
          <ul className="space-y-1">
            {words.map((word) => {
              return (
                <li key={word?._id || word?.id}>
                  <Link
                    onClick={() => {
                      setOpen(false);
                      setQuery(word.word);
                    }}
                    href={`/word?query=${word.word}`}
                    className="hover:opacity-80"
                  >
                    {word.word}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default Recommendations;

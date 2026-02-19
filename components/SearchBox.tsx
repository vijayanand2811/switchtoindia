"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import alternatives from "@/data/alternatives.json";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const suggestions =
    query.length > 0
      ? alternatives
          .filter((a: any) =>
            a.foreignBrand.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
      : [];

  function goTo(slug: string) {
    router.push(`/alternative/${slug}`);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (suggestions.length > 0) {
      goTo(suggestions[0].slug);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 relative">

      <form onSubmit={handleSubmit}>
        <div className="flex rounded-2xl border border-gray-300 overflow-hidden shadow-sm focus-within:shadow-lg transition">

          <input
            type="text"
            placeholder="Search a brand (Colgate, Dove, Nike...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-5 py-4 text-lg outline-none"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 font-semibold hover:bg-gray-800 transition"
          >
            Search
          </button>

        </div>
      </form>

      {query.length > 0 && (
        <div className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 overflow-hidden z-10">

          {suggestions.length > 0 ? (
            suggestions.map((s: any, i: number) => (
              <button
                key={i}
                onClick={() => goTo(s.slug)}
                className="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
              >
                {s.foreignBrand}
              </button>
            ))
          ) : (
            <div className="px-5 py-4 text-gray-500">
              No alternative added yet.<br />
              <span className="text-sm">We will add it soon 🇮🇳</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

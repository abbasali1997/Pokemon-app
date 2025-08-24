"use client";

import React, { useRef } from "react";

interface Props {
    query: string;
    setQuery: (q: string) => void;
    loading: boolean;
    onSubmit: (e?: React.FormEvent) => void;
}

export const Form: React.FC<Props> = ({ query, setQuery, loading, onSubmit }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="pokemonName">Pokémon name</label>
            <input
                id="pokemonName"
                ref={inputRef}
                type="text"
                placeholder="e.g. Pikachu"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-xl border px-4 py-3 outline-none"
                autoComplete="off"
            />
            <button
                type="submit"
                disabled={!query.trim() || loading}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700"
            >
                {loading ? "Searching…" : "Search"}
            </button>
        </form>
    );
};

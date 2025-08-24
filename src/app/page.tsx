"use client";

import React, { useState } from "react";
import { Pokemon } from "@/types/pokemon";
import { Form } from "@/components/Form";
import { PokemonDetails } from "@/components/PokemonDetails";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (name: string) => {
    setLoading(true);
    setError(null);
    setPokemon(null);
    try {
      const pokemon = encodeURIComponent(name.toLowerCase())
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if (!res.ok) {
        throw new Error("Pokémon not found");
      }
      const data: Pokemon = await res.json();
      setPokemon(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) fetchPokemon(query);
  };

  return (
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50 text-slate-900">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="text-3xl font-bold mb-6 text-center uppercase">Pokémon Search</h1>

          <div className="rounded-2xl border shadow-sm p-5 bg-white/70 backdrop-blur">
            <Form query={query} setQuery={setQuery} loading={loading} onSubmit={onSubmit} />
          </div>

          {error && (
              <div className="mt-6 border-red-200 text-red-700">{error}</div>
          )}

          {pokemon && <PokemonDetails pokemon={pokemon} />}

          {!pokemon && !error && !loading && (
              <div className="mt-10 text-center text-sm opacity-70">
                Try searching for a Pokémon by name to see its details.
              </div>
          )}
        </div>
      </main>
  );
}

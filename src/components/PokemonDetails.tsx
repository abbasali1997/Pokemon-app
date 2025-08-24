import React from "react";
import { Pokemon } from "@/types/pokemon";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

const getPokemonImage = (p: Pokemon): string | null => {
    const official = p.sprites?.other?.["official-artwork"];
    return (
        official?.front_default ||
        p.sprites?.front_default ||
        null
    );
};

export const PokemonDetails: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => (
    <div className="rounded-2xl border shadow-sm p-5 bg-white/70 backdrop-blur mt-6">
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[160px,1fr]">
            <div className="flex items-center justify-center">
                {getPokemonImage(pokemon) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={getPokemonImage(pokemon) as string}
                        alt={pokemon.name}
                        className="h-40 w-40 object-contain"
                    />
                ) : (
                    <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                        No image
                    </div>
                )}
            </div>

            <div className="space-y-3">
                <h2 className="text-2xl font-bold">{titleCase(pokemon.name)}</h2>
                <div className="text-sm opacity-80">
                    Base experience: <span className="font-semibold">{pokemon.base_experience}</span>
                </div>

                <div>
                    <div className="mb-2 text-sm font-semibold">Types</div>
                    <div className="flex flex-wrap gap-2">
                        {pokemon.types.map((t) => (
                            // eslint-disable-next-line react/jsx-key
                            <span
                                className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium shadow-sm">
                                {titleCase(t.type.name)}
                            </span>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
);

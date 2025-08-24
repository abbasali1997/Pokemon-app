export interface PokemonTypeRef {
    name: string;
    url: string;
}

export interface PokemonTypeEntry {
    slot: number;
    type: PokemonTypeRef;
}

export interface OfficialArtwork {
    front_default: string | null;
}

export interface OtherSprites {
    [key: string]: { front_default?: string | null } | OfficialArtwork | undefined;
    ["official-artwork"]?: OfficialArtwork;
}

export interface Sprites {
    front_default: string | null;
    other?: OtherSprites;
}

export interface Pokemon {
    name: string;
    base_experience: number;
    sprites: Sprites;
    types: PokemonTypeEntry[];
}

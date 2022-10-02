export interface Type {
  pokemon_v2_type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  id: string;
  pokemon_v2_pokemontypes: Type[];
}

export interface Pokemons {
  pokemon_v2_pokemon: Pokemon[];
}

export interface PokemonVars {
  limit?: number;
  offset?: number;
  name?: string;
}

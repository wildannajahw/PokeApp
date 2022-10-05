export interface Type {
  pokemon_v2_type: {
    name: string;
  };
}

export interface FlavorText {
  flavor_text: string;
}

export interface SpeciesName {
  genus: string;
}

export interface Specy {
  pokemon_v2_pokemonspeciesflavortexts: FlavorText[];
  pokemon_v2_pokemonspeciesnames: SpeciesName[];
}

export interface Ability {
  pokemon_v2_ability: {
    name: string;
  };
  is_hidden: string;
}

export interface Stat {
  pokemon_v2_stat: {
    name: string;
  };
  base_stat: string;
}

export interface Machine {
  pokemon_v2_item: {
    name: string;
  };
}

export interface Move {
  pokemon_v2_move: {
    name: string;
    type_id: string;
    power: string;
    accuracy: string;
    pp: string;
    pokemon_v2_movedamageclass: {
      name: string;
    };
    pokemon_v2_machines: Machine[];
  };
  level: string;
}

// Export interface Machine {
//   data: {
//     pokemon_v2_machine?: {
//       pokemon_v2_item: {
//         name: string;
//       };
//     };
//   };
// }

// export interface MachineVar {
//   moveId: string;
// }

export interface TypeRelation {
  data: {
    pokemon: {
      resistant: string[];
      weaknesses: string[];
    };
  };
}

export interface Pokemon {
  name: string;
  id: string;
  uuidv4: string;
  nickname?: string;
  height?: string;
  weight?: string;
  pokemon_v2_pokemontypes: Type[];
  pokemon_v2_pokemonspecy?: Specy;
  pokemon_v2_pokemonabilities?: Ability[];
  pokemon_v2_pokemonstats?: Stat[];
  pokemon_v2_pokemonmoves?: Move[];
}

export interface Pokemons {
  pokemon_v2_pokemon: Pokemon[];
}

export interface PokemonVars {
  limit?: number;
  offset?: number;
  name?: string;
}

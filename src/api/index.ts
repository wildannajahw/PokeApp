import { gql } from '@apollo/client';

type PokemonVars = {
  type?: string;
  gen?: number;
};

export const getPokemons = ({ type, gen }: PokemonVars) => gql`
  query pokemons($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(
      limit: $limit, 
      offset: $offset,
      where: {
        name: { _like: $name }
        ${type ? `pokemon_v2_pokemontypes : { pokemon_v2_type: { name: { _eq: "${type}" } } }` : ''}
        ${gen ? `pokemon_v2_pokemonspecy: {generation_id: {_eq: "${gen}"}}` : ''}
       
        
      }
      order_by: {id: asc}
    ) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: { name: { _like: $name } }) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!, $langID: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      name
      height
      weight
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 9 } }) {
          flavor_text
        }
        pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {
          genus
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
        is_hidden
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemonmoves(distinct_on: move_id) {
        pokemon_v2_move {
          name
          type_id
          power
          accuracy
          pp
          pokemon_v2_movedamageclass {
            name
          }
          pokemon_v2_machines {
            pokemon_v2_item {
              name
            }
          }
        }
        move_id
        level
      }
    }
  }
`;

export const GET_TYPE_RELATION = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      resistant
      weaknesses
    }
  }
`;

export const GET_MACHINE = gql`
  query pokemon($id: String) {
    pokemon_v2_machine(where: { id: { _eq: $id } }) {
      pokemon_v2_item {
        name
      }
    }
  }
`;

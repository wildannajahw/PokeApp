import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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

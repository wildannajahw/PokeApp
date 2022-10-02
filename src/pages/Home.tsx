import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { InView } from 'react-intersection-observer';
import { GET_POKEMONS } from '../api';
import { Pokemons, PokemonVars } from '../api/types';
import PokeCardLoader from '../sections/Pokemon/Home/PokeCardLoader';
import PokeList from '../sections/Pokemon/Home/PokeList';
import uuidv4 from '../utils/uuidv4';

export default function Home() {
  const { data, fetchMore, error, loading } = useQuery<Pokemons, PokemonVars>(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 20,
    },
  });
  const { pokemon_v2_pokemon: pokemons } = data || {};
  return (
    <Box
      sx={{
        paddingBottom: '5em',
      }}
    >
      {error ? <div>error</div> : ''}
      {pokemons && <PokeList pokemons={pokemons} />}
      {pokemons && (
        <InView
          onChange={async (inView) => {
            if (inView) {
              await fetchMore({
                variables: {
                  offset: pokemons.length,
                },
                updateQuery(prev, { fetchMoreResult }) {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...prev,
                    // eslint-disable-next-line camelcase
                    pokemon_v2_pokemon: [
                      ...prev.pokemon_v2_pokemon,
                      ...fetchMoreResult.pokemon_v2_pokemon,
                    ],
                  };
                },
              });
            }
          }}
        />
      )}

      {loading &&
        [...Array(10)].map(() => {
          const id = uuidv4();
          return <PokeCardLoader key={id} />;
        })}
    </Box>
  );
}

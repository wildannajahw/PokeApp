import { useQuery } from '@apollo/client';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { getPokemons } from '../api';
import { Pokemons, PokemonVars } from '../api/types';
import Iconify from '../components/Iconify';
import PokeCardLoader from '../sections/Pokemon/Home/PokeCardLoader';
import PokeList from '../sections/Pokemon/Home/PokeList';
import uuidv4 from '../utils/uuidv4';

export default function Home() {
  const [name, setName] = useState('');
  const filter = {};
  const { data, fetchMore, error, loading, refetch } = useQuery<Pokemons, PokemonVars>(
    getPokemons(filter),
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        offset: 0,
        limit: 20,
        name,
      },
    },
  );
  useEffect(() => {
    refetch({
      offset: 0,
      limit: 20,
      name: `%${name}%`,
    });
  }, [name]);
  const { pokemon_v2_pokemon: pokemons } = data || {};
  return (
    <Stack
      spacing={3}
      sx={{
        paddingBottom: '5em',
      }}
    >
      {error ? <div>error</div> : ''}
      <TextField
        id='outlined-basic'
        variant='outlined'
        color='success'
        placeholder='What Pokémon are you looking for?'
        sx={{
          borderRadius: '8px',
          BackgroundColor: (theme) => theme.palette.grey[300],
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Iconify icon={'bi:search'} />
            </InputAdornment>
          ),
        }}
        onChange={(newValue) => setName(newValue.target.value)}
      />
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
    </Stack>
  );
}

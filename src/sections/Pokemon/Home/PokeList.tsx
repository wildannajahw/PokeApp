import { Stack } from '@mui/material';
import { Pokemon } from '../../../api/types';
import PokeCard from './PokeCard';

interface PokeListProps {
  pokemons: Pokemon[];
}

export default function PokeList({ pokemons }: PokeListProps) {
  return (
    <Stack spacing={2}>
      {pokemons.map(({ name, id, pokemon_v2_pokemontypes: types, nickname }) => (
        <PokeCard
          key={id}
          name={name}
          nickname={nickname}
          id={id}
          pokemon_v2_pokemontypes={types}
        />
      ))}
    </Stack>
  );
}

import { Stack } from '@mui/material';
import { Pokemon } from '../../../api/types';
import PokeCard from './PokeCard';

interface PokeListProps {
  pokemons: Pokemon[];
}

export default function PokeList({ pokemons }: PokeListProps) {
  return (
    <Stack spacing={2}>
      {pokemons.map(({ name, id, uuidv4, pokemon_v2_pokemontypes: types, nickname }) => (
        <PokeCard
          key={id}
          name={name}
          nickname={nickname}
          id={id}
          uuidv4={uuidv4}
          pokemon_v2_pokemontypes={types}
        />
      ))}
    </Stack>
  );
}

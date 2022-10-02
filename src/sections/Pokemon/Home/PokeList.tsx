import { Stack } from '@mui/material';
import { Pokemon } from '../../../api/types';
import PokeCard from './PokeCard';

interface PokeListProps {
  pokemons: Pokemon[];
}

export default function PokeList({ pokemons }: PokeListProps) {
  console.log(pokemons);
  return (
    <Stack spacing={4}>
      {pokemons.map(({ name, id, pokemon_v2_pokemontypes: types }) => (
        <PokeCard key={id} name={name} id={id} pokemon_v2_pokemontypes={types}></PokeCard>
      ))}
    </Stack>
  );
}

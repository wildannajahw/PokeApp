import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../../api/types';
import PokeCard from './PokeCard';

interface PokeListProps {
  pokemons: Pokemon[];
}

export default function PokeList({ pokemons }: PokeListProps) {
  return (
    <Stack spacing={4}>
      {pokemons.map(({ name, id, pokemon_v2_pokemontypes: types }) => (
        <Link key={id} to={`pokemon/${name}`}>
          <PokeCard name={name} id={id} pokemon_v2_pokemontypes={types}></PokeCard>
        </Link>
      ))}
    </Stack>
  );
}

import { Grid } from '@mui/material';
import { Pokemon } from '../../../api/types';
import PokeCard from './PokeCard';

interface PokeListProps {
  pokemons: Pokemon[];
}

export default function PokeList({ pokemons }: PokeListProps) {
  return (
    <Grid container spacing={4}>
      {pokemons.map(({ name, id, pokemon_v2_pokemontypes: types, nickname }) => (
        <Grid key={id} item xs={12} sm={6}>
          <PokeCard name={nickname ? nickname : name} id={id} pokemon_v2_pokemontypes={types} />
        </Grid>
      ))}
    </Grid>
  );
}

import { useMyPokemons } from '../hooks/useMypokemons';
import PokeList from '../sections/Pokemon/Home/PokeList';

export default function MyPokemon() {
  const { myPokemons } = useMyPokemons();
  return <div>{myPokemons && <PokeList pokemons={myPokemons} />}</div>;
}

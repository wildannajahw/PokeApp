import { ReactNode, useMemo } from 'react';
import { useLocalStorage } from 'react-power-ups';
import { Pokemon } from '../api/types';
import { MyPokemonsContext } from '../hooks/useMypokemons';

type Props = {
  children: ReactNode;
};

export default function MyPokemonsProvider({ children }: Props) {
  const [myPokemons, setMyPokemons] = useLocalStorage<Pokemon[]>({
    key: 'myPokemons',
    initialValue: [],
  });

  const value = useMemo(() => ({ myPokemons, setMyPokemons }), [myPokemons]);

  return <MyPokemonsContext.Provider value={value}>{children}</MyPokemonsContext.Provider>;
}

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Pokemon } from '../api/types';

type ContextValue = {
  myPokemons: Pokemon[];
  setMyPokemons: Dispatch<SetStateAction<Pokemon[]>>;
};

export const MyPokemonsContext = createContext<ContextValue | null>(null);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useMyPokemons = () => useContext(MyPokemonsContext)!;

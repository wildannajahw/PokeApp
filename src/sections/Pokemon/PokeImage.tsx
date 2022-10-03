import { useLocation } from 'react-router-dom';

interface PokeImageProps {
  id: string;
}

export default function PokeImage({ id }: PokeImageProps) {
  const { pathname } = useLocation();

  const isHome = pathname === '/' || pathname === '/my-pokemon';
  const PNG_URL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  return (
    <img
      src={`${PNG_URL}${id}.png`}
      alt=''
      style={{
        position: isHome ? 'absolute' : 'inherit',
        bottom: isHome ? '0' : 'inherit',
        right: 0,
        height: isHome ? '130px' : '160px',
      }}
    />
  );
}

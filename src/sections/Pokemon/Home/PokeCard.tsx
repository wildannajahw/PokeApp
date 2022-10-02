import { Stack, styled, Typography } from '@mui/material';
import { Pokemon } from '../../../api/types';
import BadgeType from '../BadgeType';
import PokeImage from '../PokeImage';

export const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: theme.shadows[5],
  borderRadius: '8px',
  display: 'flex',
  minHeight: '100px',
  alignItems: 'center',
}));

export default function PokeCard({ name, id, pokemon_v2_pokemontypes: pokemonTypes }: Pokemon) {
  const types = pokemonTypes.map(
    (item: { pokemon_v2_type: { name: string } }) => item.pokemon_v2_type?.name,
  );
  const [firstType] = types;
  return (
    <Card
      sx={{
        backgroundColor: `pokemon.background.${firstType?.toLocaleLowerCase()}`,
        backgroundImage: 'url("assets/pokeBG2.svg"), url("assets/pokeBG.svg")',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'right, 30% 0%',
      }}
    >
      <Stack
        direction={'row'}
        alignItems='center'
        width={'100%'}
        justifyContent={'space-between'}
        px={'1rem'}
      >
        <Stack spacing={1}>
          <Typography variant='h3' color={'#fff'} className={'capitalize'}>
            {name}
          </Typography>
          <Stack direction={'row'} spacing={1}>
            {types.map((type) => (
              <BadgeType key={type} type={type} />
            ))}
          </Stack>
        </Stack>
        <PokeImage id={id} />
      </Stack>
    </Card>
  );
}

import { Stack, Typography } from '@mui/material';

interface BadgeTypeProps {
  type: string;
}

interface BadgeOnlyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  types: any;
}

interface BadgeProps {
  type: string;
}

export default function BadgeType({ type }: BadgeTypeProps) {
  const srcImg = `/assets/${type.toLocaleLowerCase()}.svg`;
  return (
    <Stack
      key={type}
      direction='row'
      sx={{
        backgroundColor: `pokemon.type.${type.toLocaleLowerCase()}`,
        padding: '0.25rem',
        borderRadius: '0.25rem',
      }}
    >
      <img
        src={srcImg}
        alt=''
        color='#fff'
        width='15px'
        style={{
          marginRight: '0.25rem',
        }}
      />
      <Typography
        variant='body2'
        color='#fff'
        key={type.toLocaleLowerCase()}
        textTransform='capitalize'
      >
        {type}
      </Typography>
    </Stack>
  );
}

export function BadgeOnly({ types }: BadgeOnlyProps) {
  return (
    <Stack spacing={1} direction='row'>
      {types?.map((type: string) => {
        const srcImg = `/assets/${type.toLocaleLowerCase()}.svg`;
        return (
          <Stack
            key={type}
            direction='row'
            justifyContent='center'
            sx={{
              backgroundColor: `pokemon.type.${type.toLocaleLowerCase()}`,
              padding: '0.25rem',
              borderRadius: '0.25rem',
              width: '30px',
              height: '30px',
            }}
          >
            <img src={srcImg} alt='' color='#fff' width='15px' height='15px' />
          </Stack>
        );
      })}
    </Stack>
  );
}

export function Badge({ type }: BadgeProps) {
  const srcImg = `/assets/${type.toLocaleLowerCase()}.svg`;
  return (
    <Stack
      key={type}
      direction='row'
      justifyContent='center'
      sx={{
        backgroundColor: `pokemon.type.${type.toLocaleLowerCase()}`,
        padding: '0.25rem',
        borderRadius: '0.25rem',
        m: 'auto',
        width: '20px',
        height: '20px',
      }}
    >
      <img src={srcImg} alt='' color='#fff' width='15px' height='15px' title={type} />
    </Stack>
  );
}

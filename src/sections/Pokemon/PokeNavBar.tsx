import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';
import { Link, useLocation } from 'react-router-dom';

export default function PokeNavBar() {
  const { pathname } = useLocation();
  const isMyPokemon = pathname === '/my-pokemon';
  return (
    <Stack
      sx={{
        backgroundImage: 'url("assets/pokeBG2-alt.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20rem',
        backgroundPositionY: '390%',
        backgroundPositionX: 'center',
        py: '2rem',
      }}
      spacing={3}
    >
      <Stack direction={'row'} display={'flex'} justifyContent={'space-between'}>
        <Link to={'/'}>
          <img
            src='images/pokemon-logo.png'
            width={320 * 0.48}
            height={118 * 0.48}
            alt='Pokemon logo'
            className='h-auto w-20 lg:w-[154px]'
          />
        </Link>
        <Stack
          sx={{
            color: (theme) => theme.palette.grey[700],
            fontSize: (theme) => theme.typography.h2,
          }}
          direction={'row'}
          justifyContent={'right'}
          spacing={1}
        >
          <Iconify icon='fe:app-menu' />
          <Iconify icon='mi:filter' />
          <Link to={'/my-pokemon'}>
            <Iconify icon='bx:home-alt-2' />
          </Link>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography variant='h2'>{isMyPokemon ? 'My Pokémon' : 'Pokédex'}</Typography>
        <Typography
          variant='subtitle2'
          sx={{
            color: (theme) => theme.palette.grey[600],
          }}
        >
          Search for Pokémon by name or using the National Pokédex Number
        </Typography>
        <TextField
          id='outlined-basic'
          variant='outlined'
          color='success'
          placeholder='What Pokémon are you looking for?'
          sx={{
            borderRadius: '8px',
            BackgroundColor: (theme) => theme.palette.grey[300],
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Iconify icon={'bi:search'} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

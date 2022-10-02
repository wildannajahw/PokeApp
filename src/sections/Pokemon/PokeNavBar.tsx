import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';

export default function PokeNavBar() {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("assets/pokeBG2-alt.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20rem',
        backgroundPositionY: '280%',
        backgroundPositionX: 'center',
        py: '2rem',
      }}
      spacing={1}
    >
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
      </Stack>
      <Typography variant='h2'>Pokédex</Typography>
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
  );
}

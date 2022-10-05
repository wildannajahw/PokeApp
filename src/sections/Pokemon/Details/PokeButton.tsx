import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Pokemon } from '../../../api/types';
import { useMyPokemons } from '../../../hooks/useMypokemons';
import uuidv4 from '../../../utils/uuidv4';

export default function PokeButton({ id, name, pokemon_v2_pokemontypes: PokeTypes }: Pokemon) {
  const { setMyPokemons } = useMyPokemons();
  const [catched, setCatch] = useState(false);
  const [nickname, setNickname] = useState('');
  const message = catched ? 'Gotcha!' : 'Sorry, lady luck not in your side!';

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    setMyPokemons((prev: Pokemon[]) => {
      const newPokemon: Pokemon = {
        id,
        uuidv4: uuidv4(),
        name,
        // eslint-disable-next-line camelcase
        pokemon_v2_pokemontypes: PokeTypes,
        nickname,
      };
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return [newPokemon, ...prev!];
    });
  };

  const pokeCatch = () => {
    const isSuccess = Math.random() > 0.5;
    setCatch(isSuccess);
    handleClickOpen();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
          {catched && (
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Enter Pokemon Name'
              type='text'
              fullWidth
              variant='standard'
              onChange={(newValue) => setNickname(newValue.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>{catched && <Button onClick={handleSubmit}>Submit</Button>}</DialogActions>
      </Dialog>
      <button
        className='fixed rounded-full bottom-10 right-10'
        style={{
          background: '#000',
          width: '5rem',
        }}
        onClick={pokeCatch}
      >
        <img src={'../assets/pokeball.svg'} alt='asd' style={{}} />
      </button>
    </div>
  );
}

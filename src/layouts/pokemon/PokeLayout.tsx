import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function PokeLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

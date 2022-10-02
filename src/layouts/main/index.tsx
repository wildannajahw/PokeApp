import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import PokeNavBar from '../../sections/Pokemon/PokeNavBar';

export default function MainLayout() {
  return (
    <Container>
      <PokeNavBar />
      <Outlet />
    </Container>
  );
}

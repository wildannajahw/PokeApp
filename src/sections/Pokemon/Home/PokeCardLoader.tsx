import { Skeleton, Stack, styled } from '@mui/material';
export const Card = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: theme.shadows[5],
  borderRadius: '8px',
  display: 'flex',
  minHeight: '100px',
  alignItems: 'center',
}));
export default function PokeCardLoader() {
  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        my: '2rem',
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
          <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} width={'5rem'} />
          <Stack direction={'row'} spacing={1}>
            <Skeleton variant='rectangular' width={'5rem'} height={'1.5rem'} />
            <Skeleton variant='rectangular' width={'5rem'} height={'1.5rem'} />
          </Stack>
        </Stack>
        <Skeleton variant='circular' width={70} height={70} />
      </Stack>
    </Card>
  );
}

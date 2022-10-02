import { Box, Stack } from '@mui/material';

interface PokeAboutProps {
  flavorText: string[];
}

export default function PokeAbout({ flavorText }: PokeAboutProps) {
  return (
    // <Box sx={{ py: '3rem' }}>
    <Box>
      <Stack>{flavorText?.pop()}</Stack>
    </Box>
    // </Box>
  );
}

import { Box, Grid, Stack, Typography } from '@mui/material';
import { Stat } from '../../../api/types';

interface PokeStatsProps {
  stats?: Stat[];
  firstType: string;
}

export default function PokeStats({ stats, firstType }: PokeStatsProps) {
  let total = 0;
  return (
    <Stack spacing={2}>
      <Typography variant='h4' color={`pokemon.type.${firstType?.toLocaleLowerCase()}`}>
        Base Stat
      </Typography>
      <Stack>
        {stats &&
          stats.map(({ pokemon_v2_stat: stat, base_stat: baseStat }) => {
            const { name: statName } = stat;
            const newStatName = statName.split(/[\W]/g);
            if (newStatName[0] === 'special') {
              newStatName[0] = 'sp. ';
              if (newStatName[1] === 'attack') {
                newStatName[1] = 'atk';
              }

              if (newStatName[1] === 'defense') {
                newStatName[1] = 'def';
              }
            }

            total += parseFloat(baseStat);

            return (
              <Grid container key={statName}>
                <Grid item xs={4} sm={3}>
                  <Typography className='capitalize'>{newStatName}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Grid container alignItems={'center'}>
                    <Grid item xs={2}>
                      <Typography textAlign={'right'}>{baseStat}</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Box
                        className='p-0.5 rounded-full'
                        sx={{
                          mx: '1rem',
                          height: '0.2rem',
                          width: `${(parseFloat(baseStat) / 255) * 100}%`,
                          backgroundColor: `pokemon.background.${firstType?.toLocaleLowerCase()}`,
                          transition: 'width 2s',
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        <Grid container>
          <Grid item xs={4} sm={3}>
            Total
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={2}>
                <Typography textAlign={'right'}>{total}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

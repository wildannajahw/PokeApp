import { Grid, Stack, Typography } from '@mui/material';
import { Ability, TypeRelation } from '../../../api/types';
import { BadgeOnly } from '../BadgeType';

interface PokeDataProps {
  genus?: string;
  firstType?: string;
  typeRelation: TypeRelation;
  height?: string;
  weight?: string;
  abilities?: Ability[];
}

export default function PokeData({
  genus,
  firstType,
  typeRelation,
  height = '0',
  weight = '0',
  abilities,
}: PokeDataProps) {
  const data = [
    {
      text: 'Species',
      data: genus,
    },
    { text: 'Height', data: `${parseFloat(height) / 10} M` },
    { text: 'Weight', data: `${parseFloat(weight) / 10} Kg` },
  ];
  const { weaknesses, resistant } = typeRelation.data.pokemon;
  return (
    <Stack spacing={2}>
      <Typography variant='h4' color={`pokemon.type.${firstType?.toLocaleLowerCase()}`}>
        Pokédex Data
      </Typography>
      <Stack spacing={0.5}>
        {data &&
          data.map(({ text, data }) => (
            <Grid container key={text}>
              <Grid item xs={4}>
                <Typography>{text}</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{data}</Typography>
              </Grid>
            </Grid>
          ))}
        <Grid container>
          <Grid item xs={4}>
            Abilities
          </Grid>
          <Grid item xs={7}>
            <Stack>
              {abilities &&
                abilities.map(({ is_hidden: isHidden, pokemon_v2_ability: ability }, index) => {
                  const { name: abilityName } = ability;
                  return (
                    <Grid container key={abilityName}>
                      <Grid item xs={1}>
                        <Typography className={'capitalize'}>{index + 1}</Typography>
                      </Grid>
                      <Grid item xs={11}>
                        <Stack direction={'row'}>
                          <Typography className={'capitalize'}>
                            {abilityName} {isHidden && <span>(Hidden Ability)</span>}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={1}>
          <Grid container>
            <Grid item xs={4}>
              Weakness
            </Grid>
            <Grid item xs={7}>
              <BadgeOnly types={weaknesses} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              Resistant
            </Grid>
            <Grid item xs={7}>
              <BadgeOnly types={resistant} />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

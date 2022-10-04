import { useQuery } from '@apollo/client';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import { typeRelationClient } from '..';
import { GET_POKEMON, GET_TYPE_RELATION } from '../api';
import { Pokemons, PokemonVars, TypeRelation } from '../api/types';
import Iconify from '../components/Iconify';
import BadgeType from '../sections/Pokemon/BadgeType';
import PokeAbout from '../sections/Pokemon/Details/PokeAbout';
import PokeButton from '../sections/Pokemon/Details/PokeButton';
import PokeData from '../sections/Pokemon/Details/PokeData';
import PokeMoves from '../sections/Pokemon/Details/PokeMoves';
import PokeStats from '../sections/Pokemon/Details/PokeStats';
import PokeImage from '../sections/Pokemon/PokeImage';

export default function PokeDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery<Pokemons, PokemonVars>(GET_POKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      name,
    },
  });
  const [typeRelation, setTypeRelation] = useState<TypeRelation>();

  const getRelationType = async () => {
    try {
      const data = await typeRelationClient.query({
        query: GET_TYPE_RELATION,
        variables: {
          name,
        },
      });
      setTypeRelation(data);

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRelationType();
  }, []);

  const [pokemon] = data?.pokemon_v2_pokemon || [];

  const {
    id,
    height,
    weight,
    pokemon_v2_pokemontypes: pokeTypes,
    pokemon_v2_pokemonspecy: pokeSpecy,
    pokemon_v2_pokemonabilities: pokeAbilities,
    pokemon_v2_pokemonstats: stats,
    pokemon_v2_pokemonmoves: moves,
  } = pokemon || '';

  const types = pokeTypes?.map(
    (item: { pokemon_v2_type: { name: string } }) => item.pokemon_v2_type.name,
  );
  const [firstType] = types || [];

  const [specy] = pokeSpecy?.pokemon_v2_pokemonspeciesnames || [];
  const { genus } = specy || '';
  const flavorText = pokeSpecy?.pokemon_v2_pokemonspeciesflavortexts.map(
    (item) => item.flavor_text,
  );

  const [nameInView, setNameInvew] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: `pokemon.background.${firstType?.toLocaleLowerCase()}`,
      }}
    >
      <Stack
        position={'sticky'}
        top='0'
        padding={'2rem 2rem'}
        sx={{
          backgroundColor: `pokemon.background.${firstType?.toLocaleLowerCase()}`,

          backgroundImage: 'url("../../assets/pokeBG.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: '15rem',
        }}
        direction={'row'}
        alignItems={'center'}
      >
        <Iconify
          onClick={() => navigate(-1)}
          icon='akar-icons:arrow-left'
          sx={{
            marginLeft: '1rem',
            fontSize: '2rem',
            color: '#fff',
          }}
        />
        {nameInView === false && (
          <Stack
            position={'absolute'}
            left={'50%'}
            sx={{
              transform: 'translate(-50%, 0)',
            }}
          >
            <Typography variant='h2' color={'#fff'} className={'capitalize'}>
              {name}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Box display={'flex'} justifyContent={'center'} alignItems='center' pb={'2rem'}>
        {id && (
          <Box
            sx={{
              backgroundColor: `pokemon.background.${firstType?.toLocaleLowerCase()}`,

              backgroundImage: 'url("../../assets/pokeBG2.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
            }}
          >
            <PokeImage id={id} />
          </Box>
        )}
        <Stack spacing={1}>
          <Typography variant='h3' color={'#fff'} className={'capitalize'}>
            {name}
            <InView onChange={(inView) => setNameInvew(inView)} />
          </Typography>
          <Stack direction={'row'} spacing={1}>
            {types && types.map((type) => <BadgeType key={type} type={type} />)}
          </Stack>
        </Stack>
      </Box>
      <Stack
        spacing={3}
        className='rounded-t-3xl'
        sx={{
          backgroundColor: 'background.default',
          p: '2rem',
          pb: '7rem',
        }}
      >
        {flavorText && <PokeAbout flavorText={flavorText} />}
        <Grid container>
          <Grid item xs={12} sm={6}>
            {typeRelation && (
              <PokeData
                genus={genus}
                weight={weight}
                height={height}
                abilities={pokeAbilities}
                firstType={firstType}
                typeRelation={typeRelation}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <PokeStats stats={stats} firstType={firstType} />
          </Grid>
        </Grid>

        <PokeMoves moves={moves} />
        {name && <PokeButton id={id} name={name} pokemon_v2_pokemontypes={pokeTypes} />}
      </Stack>
    </Box>
  );
}

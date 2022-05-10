import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { PokemonApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

type Props = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

const getImage = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: getImage(i + 1),
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

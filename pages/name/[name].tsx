import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PokemonApi } from "../../api";
import { PokemonList } from "../../components/pokemon";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemon } from "../../utils";

type Props = {
  pokemon: Pokemon;
};

const PokemonNamePage: NextPage<Props> = ({ pokemon }) => (
  <PokemonList pokemon={pokemon} />
);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await PokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );
  const pokemons = data.results.map(({ name }) => name);

  return {
    paths: pokemons.map((name) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemon(name);
  if (!pokemon) return { redirect: { destination: "/", permanent: false } };
  return { props: { pokemon } };
};

export default PokemonNamePage;

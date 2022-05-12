import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PokemonList } from "../../components/pokemon";
import { Pokemon } from "../../interfaces";
import { getPokemon } from "../../utils";

type Props = {
  pokemon: Pokemon;
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => (
  <PokemonList pokemon={pokemon} />
);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons.map((id) => ({ params: { id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemon(id);
  if (!pokemon) return { redirect: { destination: "/", permanent: false } };
  return { props: { pokemon }, revalidate: 86400 };
};

export default PokemonPage;

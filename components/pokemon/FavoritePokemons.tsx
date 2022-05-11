import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

type FavoritePokemonsProps = {
  pokemons: number[];
};

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({
  pokemons = [],
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokemon) => (
        <FavoritePokemonCard key={pokemon} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

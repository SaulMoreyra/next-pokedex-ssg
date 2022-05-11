import React, { FC, useState } from "react";
import { NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { LocalFavorites } from "../../utils";

type Props = {
  pokemon: Pokemon;
};

export const PokemonList: FC<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    typeof window !== "undefined"
      ? LocalFavorites.existInFavorites(pokemon.id)
      : false
  );

  const onToggleFavorite = () => {
    LocalFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                height={200}
                width="100%"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid.Container justify="space-between">
                <Grid xs={12} sm={6}>
                  <Text h1 transform="capitalize">
                    {pokemon.name}
                  </Text>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Grid.Container justify="flex-end" alignItems="center">
                    <Button
                      onClick={onToggleFavorite}
                      color="gradient"
                      ghost={!isInFavorites}
                    >
                      {isInFavorites ? "En Favoritos" : "Guardar en Favoritos"}
                    </Button>
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

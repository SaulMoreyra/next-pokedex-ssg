import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

type FavoritePokemonCardProps = {
  pokemon: number;
};

export const FavoritePokemonCard: FC<FavoritePokemonCardProps> = ({
  pokemon,
}) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemon}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card onClick={onFavoriteClick} hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};

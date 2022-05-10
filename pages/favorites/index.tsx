import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";

const FavoritesPage: NextPage = () => {
  return (
    <Layout title="Pókemons Favoritos">
      <Grid.Container gap={2} justify="flex-start">
        Favoritos
      </Grid.Container>
    </Layout>
  );
};

export default FavoritesPage;

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { LocalFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(LocalFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pókemons Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;

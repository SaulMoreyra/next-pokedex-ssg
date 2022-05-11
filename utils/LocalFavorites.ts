const pokemons = (): number[] => {
  if (typeof window === "undefined") return [];
  const storageData = localStorage.getItem("favorites");
  const favorites: number[] = JSON.parse(storageData || "[]");
  return favorites;
};

const toggleFavorite = (id: number) => {
  let favorites = pokemons();
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  const favorites: number[] = pokemons();
  return favorites.includes(id);
};

const functions = { toggleFavorite, existInFavorites, pokemons };

export default functions;

import { PokemonApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemon = async (identifier: string) => {
  try {
    const { data } = await PokemonApi.get<Pokemon>(`/pokemon/${identifier}`);
    const pokemon = { id: data.id, name: data.name, sprites: data.sprites };
    return pokemon;
  } catch (error) {
    return null;
  }
};

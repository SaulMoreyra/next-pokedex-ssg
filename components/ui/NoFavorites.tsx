import { Container, Image, Text } from "@nextui-org/react";

const DEFAULT = "51";
const IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${DEFAULT}.svg`;

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src={IMAGE_URL}
        alt="DEFAULT_POKEMON"
        width={250}
        height={250}
        css={{ opacity: 0.7 }}
      />
    </Container>
  );
};

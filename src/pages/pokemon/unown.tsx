import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";

import { PokemonCardProps } from "components/organisms/PokemonList";
import { PokemonListTemplate } from "components/pages/PokemonTemplate";
import { getKantoPokemonJson } from "lib/statics";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const lang = "en";
  const pokemons = getKantoPokemonJson();

  const cardItems: PokemonCardProps[] = pokemons.map(({ data }) => {
    return {
      id: data.id,
      index: data.pokedex_numbers.find(
        ({ pokedex: { name } }) => name === "national"
      ),
      name: data.names.find(({ language }) => language.name === lang)?.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      genus: data.genera.find(({ language }) => language.name === lang)?.genus,
      flavorText: data.flavor_text_entries.find(
        ({ language }) => language.name === lang
      )?.flavor_text,
    };
  });

  return {
    props: {
      data: cardItems,
      lang: "unown",
    },
  };
};

const Pokemons: NextPage<Props> = (props) => {
  return <PokemonListTemplate {...props} />;
};

export default Pokemons;

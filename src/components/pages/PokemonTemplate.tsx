import { VFC } from "react";

import Link from "next/link";

import { CommonMeta } from "components/atoms/CommonMeta";
import {
  PokemonList,
  PokemonCardProps,
} from "components/organisms/PokemonList";

type Props = {
  lang: string;
  data: PokemonCardProps[];
};

const strings = {
  ja: {
    title: "ポケモン図鑑",
    description: "関東のポケモン一覧",
    header: {
      title: "ポケモン図鑑",
      summary: "カントー地方のみ",
      changeLang: "",
      lang: {
        ja: "日本語",
        en: "英語",
        unown: "アンノーン文字",
      },
    },
  },
  en: {
    title: "Pokedex",
    description: "List of Pokémon in the Kanto Region",
    header: {
      title: "Pokedex",
      summary: "Supported only in the Kanto region",
      changeLang: "Change language",
      lang: {
        ja: "Japanese",
        en: "English",
        unown: "Unown Alphabet Code",
      },
    },
  },
};

const PokemonListTemplate: VFC<Props> = ({ lang, data }) => {
  const pageTexts = lang === "ja" ? strings.ja : strings.en;

  return (
    <section
      className="text-gray-600 body-font"
      {...(lang === "unown" && {
        style: { fontFamily: "UnownGothic, sans-serif" },
      })}
    >
      <CommonMeta title={pageTexts.title} description={pageTexts.description} />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            {pageTexts.header.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {pageTexts.header.summary}
          </p>
          <div className="my-2 border rounded ">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {pageTexts.header.changeLang}
            </p>
            <Link href="/pokemon">
              <a className="mx-2 text-blue-700 hover:text-indigo-700">
                {pageTexts.header.lang.ja}
              </a>
            </Link>
            /
            <Link href="/pokemon/en">
              <a className="mx-2 text-blue-700 hover:text-indigo-700">
                {pageTexts.header.lang.en}
              </a>
            </Link>
            /
            <Link href="/pokemon/unown">
              <a className="mx-2 text-blue-700 hover:text-indigo-700">
                {pageTexts.header.lang.unown}
              </a>
            </Link>
          </div>
        </div>
        <PokemonList pokemons={data} />
      </div>
    </section>
  );
};

export { PokemonListTemplate };

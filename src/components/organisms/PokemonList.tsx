import { VFC } from "react";

import Link from "next/link";

export type PokemonCardProps = {
  id: number;
  name?: string;
  image?: string;
  genus?: string;
  flavorText?: string;
};

type PokemonListProps = {
  pokemons: PokemonCardProps[];
};

const PokemonCard: VFC<PokemonCardProps> = ({
  id,
  name,
  image,
  genus,
  flavorText,
}) => {
  return (
    <li className="p-4 lg:w-1/2">
      <Link href={`/pokemon/${id}`}>
        <a className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt={name}
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={image}
            height={200}
            width={200}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>
            <h3 className="text-gray-500">{genus}</h3>
            <h4 className="text-gray-500 mb-3">No.{id}</h4>
            <p className="mb-4">{flavorText}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

const PokemonList: VFC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className="flex flex-wrap -m-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          genus={pokemon.genus}
          flavorText={pokemon.flavorText}
        />
      ))}
    </ul>
  );
};

export { PokemonList };

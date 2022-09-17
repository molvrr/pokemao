import { useEffect, useState } from "react";
import PokeApi from "./api/pokeApi";
import Pokemon from "./Pokemon";
import "./index.css";

export default function () {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    PokeApi.all().then((data) => setPokemonList(data));
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen gap-2 flex-wrap p-4">
      {pokemonList.map((data) => {
        const pkm = data.species[0].pokemons[0];
        const sprite = JSON.parse(pkm.spriteList[0].sprites).other[
          "official-artwork"
        ].front_default;
        const types = pkm.types.map((value) => {
          return value.type.name;
        });
        return (
          <Pokemon
            key={pkm.id}
            name={pkm.name}
            cover={sprite}
            height={pkm.height}
            pokeNumber={pkm.id}
            pokeTypes={types}
          />
        );
      })}
    </div>
  );
}

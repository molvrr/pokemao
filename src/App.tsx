import { useEffect, useState } from "react"
import client from "./api/client"
import Pokemon from "./Pokemon"
import "./index.css"

export default function() {
  const [pokemonList, setPokemonList] = useState([])
  useEffect(() => {
    client().then(data => setPokemonList(data))
    }, [])
  return ( 
  <div className="flex justify-center items-center min-h-screen gap-2 flex-wrap p-4">
    {pokemonList.map(data => {
      const pkm = data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0];
      const sprite = JSON.parse(pkm.pokemon_v2_pokemonsprites[0].sprites).other["official-artwork"].front_default;
      const types = pkm.pokemon_v2_pokemontypes.map(valor => {
          return valor.pokemon_v2_type.name
        })
       return <Pokemon key={pkm.id} name={pkm.name} cover={sprite} height={pkm.height} pokeNumber={pkm.id} pokeTypes={types} />
      })}
  </div>
  )
}


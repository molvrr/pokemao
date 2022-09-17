import { gql } from "@apollo/client";
import client from "./client";

const GetPokemons = gql`
query GetPokemons {
  evolutionchain: pokemon_v2_evolutionchain {
    species: pokemon_v2_pokemonspecies(limit: 1) {
      pokemons: pokemon_v2_pokemons {
        id
        name
        height
        spriteList: pokemon_v2_pokemonsprites {
          sprites
        }
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
      }
    }
  }
}
`

const all = async () => {
  const result = (await client.query({query: GetPokemons}))
  console.log(result)
  return result.data.evolutionchain
}

export default { all }

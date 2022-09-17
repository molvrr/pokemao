import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const GetPokemons = gql`
query GetPokemons {
  pokemon_v2_evolutionchain {
    pokemon_v2_pokemonspecies(limit: 1) {
      pokemon_v2_pokemons {
        id
        name
        height
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
}
`

export default async function() {
  return (await client.query({query: GetPokemons})).data.pokemon_v2_evolutionchain
}

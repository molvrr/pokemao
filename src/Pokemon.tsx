import { Drop, Skull, Ghost, Fire, Leaf, AirplaneTilt, Bug } from "phosphor-react";

type PokemonProps = {
  name: string,
  cover: string,
  height: string,
  pokeNumber: string,
  pokeTypes: string[]
}


export default function({name, cover, height, pokeNumber, pokeTypes}:PokemonProps) {
  return (
  <div className="p-2 flex flex-col justify-center rounded-md items-center bg-yellow-300 cursor-pointer shadow">
    #{pokeNumber.toString().padStart(3, 0)}
    <p className="font-bold text-xl">{name.toUpperCase()}</p>
    <img className="max-w-xs" src={cover}/>
    <div className="flex">
    <Drop size={32} color={"hsl(200, 50%, 50%)"} weight="fill" />
    <Skull size={32} color={"hsl(310, 50%, 50%)"} weight="fill"/>
    <Ghost size={32} color={"hsl(210, 50%, 40%)"} weight="fill" />
    <Fire size={32} color={"hsl(360, 80%, 70%)"} weight="fill" />
    <Leaf size={32} color={"hsl(140, 45%, 50%)"} weight="fill" />
    <AirplaneTilt size={32} color={"hsl(140, 80%, 70%)"} weight="fill" />
    <Bug size={32} color={"hsl(360, 80%, 45%)"} weight="fill" />
    </div>
  </div>
  )
}

interface GenerationFilter{
  [key: number]: boolean
}

interface ElementFilter {
  [key: string]: boolean
}

interface PokemonBasic{
  id: number,
  name: string,
  element: string,
  weight: number,
  hp: number,
  imageMain: string,
  imageAlt: string,
  generation: number
}

interface jsonData{
  name: string,
  stats: [{
    base_stat: number
  }],
  types: [
    {type: {
      name: string
    }}
  ],
  weight: number,
  sprites: {
    "other":{
      "home":{
        front_default: string
      },
      "official-artwork":{
        front_default:string
      }
    }
  }
}


export {GenerationFilter, ElementFilter, PokemonBasic, jsonData}
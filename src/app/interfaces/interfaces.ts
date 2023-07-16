interface GenerationFilter {
  [key: number]: boolean;
}

interface PageEvent {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}

interface ElementFilter {
  [key: string]: boolean;
}

interface routeData {
  [key: string]: number;
}

interface PokemonBasic {
  id: number;
  name: string;
  element: string;
  weight: number;
  hp: number;
  imageMain: string;
  imageAlt: string;
  generation: number;
}

interface jsonData {
  name: string;
  stats: [
    {
      base_stat: number;
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface jsonDataDetailed {
  abilities: [{ ability: { name: string } }];
  base_experience: number;
  height: number;
  id: number;
  order: number;
  weight: number;
  name: string;
  moves: [{ move: { name: string } }];
  stats: [{ base_stat: number; effort: number; stat: { name: string } }];
  types: [
    {
      slot: number;
      type: { name: string };
    },
  ];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface pokemonDetailed {
  abilities: string[];
  base_experience: number;
  height: number;
  id: number;
  order: number;
  weight: number;
  name: string;
  moves: string[];
  stats: { stat: number; effort: number; name: string }[];
  types: string[];
  images: string[];
}

interface elementObject {
  [normal: string]: string;
}

export {
  GenerationFilter,
  ElementFilter,
  PokemonBasic,
  jsonData,
  routeData,
  jsonDataDetailed,
  pokemonDetailed,
  elementObject,
  PageEvent,
};

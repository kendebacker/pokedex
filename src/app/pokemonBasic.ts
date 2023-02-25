import { ElementType } from "./elementType";

export interface PokemonBasic{
    id: number,
    name: string,
    element: ElementType,
    stage: number,
    hp: number,
    imageMain: string,
    imageAlt: string
}
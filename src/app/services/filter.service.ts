import { Injectable, ValueProvider } from '@angular/core';
import { GenerationFilter, ElementFilter } from '../interfaces/interfaces';
import { PokemonBasic } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  constructor() { }

  sortSetting: string = "ID"
  
  generationFilter: GenerationFilter ={
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  }

  elementFilter: ElementFilter ={
    normal: true,
    fighting: true, 
    flying: true,
    poison: true, 
    ground: true, 
    rock:true, 
    bug: true, 
    ghost:true, 
    steel: true, 
    fire: true, 
    water: true, 
    grass: true, 
    psychic:true, 
    electric: true, 
    ice: true, 
    dragon: true, 
    dark: true, 
    fairy:true, 
  }

  updateSortSetting(setting: string):string{
    this.sortSetting = setting
    return setting
  }

  updateGeneration(generation: number):GenerationFilter{
    this.generationFilter[generation] = !this.generationFilter[generation]
    return this.generationFilter
  }

  updateElement(element: string):ElementFilter{
    this.elementFilter[element] = !this.elementFilter[element]
    return this.elementFilter
  }

  getGenerationSettings():GenerationFilter{
    return this.generationFilter
  }

  getElementSettings():ElementFilter{
    return this.elementFilter
  }

  sortPokemon(list: PokemonBasic[]):PokemonBasic[]{
    console.log(list, this.sortSetting)
    if(this.sortSetting === "ID"){
      return list.sort((a,b)=> a.id - b.id)
    }else if(this.sortSetting === "Generation"){
      return list.sort((a,b)=> a.generation - b.generation)
    }else if(this.sortSetting === "Weight"){
      return list.sort((a,b)=> a.weight - b.weight)
    }else if(this.sortSetting === "HP"){
      return list.sort((a,b)=> a.hp - b.hp)
    }else if(this.sortSetting === "Element"){
      return list.sort((a,b)=> a.element.toLowerCase() < b.element.toLowerCase()?-1:a.element.toLowerCase() > b.element.toLowerCase()?1:0)
    }else{
      return list.sort((a,b)=> a.name.toLowerCase() < b.name.toLowerCase()?-1:a.name.toLowerCase() > b.name.toLowerCase()?1:0)
    }
  }

}

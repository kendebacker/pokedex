import { Injectable } from '@angular/core';

interface GenerationFilter{
  [key: number]: boolean
}

interface ElementFilter {
  [key: string]: boolean
}


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
    Normal: true,
    Fighting: true, 
    Flying: true,
    Poison: true, 
    Ground: true, 
    Rock:true, 
    Bug: true, 
    Ghost:true, 
    Steel: true, 
    Fire: true, 
    Water: true, 
    Grass: true, 
    Psychic:true, 
    Electric: true, 
    Ice: true, 
    Dragon: true, 
    Dark: true, 
    Fairy:true, 
  }

  updateSortSetting(setting: string){
    this.sortSetting = setting
  }

  updateGeneration(generation: number){
    this.generationFilter[generation] = !this.generationFilter[generation]
  }

  updateElement(element: string){
    this.elementFilter[element] = !this.elementFilter[element]
  }
  

}

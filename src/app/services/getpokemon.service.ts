import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { FilterService} from './filter.service';
import { PokemonBasic, jsonData } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GetpokemonService {

  constructor( private http : HttpClient, private filterService: FilterService) {}

  pokeList: PokemonBasic[] = []

  generationFind(num:number):number{
    if(num <= 151){
      return 1
    }else if(num <= 251){
      return 2
    }else if(num <= 386){
      return 3
    }else if(num <= 493){
      return 4
    }else if(num <= 649){
      return 5
    }else if(num <= 721){
      return 6
    }else if(num <= 809){
      return 7
    }else if(num <= 905){
      return 8
    }else{
      return 9
    }
  }

  init():boolean{
    for(let x = 1; x < 2; x++){
      this.http.get<jsonData>(`https://pokeapi.co/api/v2/pokemon/${x}`).subscribe((data)=>{
        this.pokeList.push({name: data.name, id: x, hp: data.stats[0].base_stat, element: data.types[0].type.name,
           weight: data.weight, imageMain: data.sprites.other.home.front_default, imageAlt: data.sprites.other["official-artwork"].front_default, generation: this.generationFind(x) })
      })
    }
    return true
  }

  get():PokemonBasic[]{
    const generationSettings = this.filterService.getGenerationSettings()
    const elementSettings = this.filterService.getElementSettings()
    return this.filterService.sortPokemon(this.pokeList.filter(poke => elementSettings[poke.element])
    .filter(poke => generationSettings[poke.generation]))
  }
}

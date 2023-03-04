import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { FilterService} from './filter.service';
import { PokemonBasic, jsonData} from '../interfaces/interfaces';
import { generationFind } from './generationFind';


@Injectable({
  providedIn: 'root'
})
export class GetpokemonService {

  constructor( private http : HttpClient, private filterService: FilterService) {

  }

  pokeList: PokemonBasic[] = []
  pageSize: number = 15

  getPageSize():number{
    return this.pageSize
  }

  updatePageSize(newSize:number){
    this.pageSize = newSize
  }

  init():void{
    for(let x = 1; x < 40; x++){
      this.http.get<jsonData>(`https://pokeapi.co/api/v2/pokemon/${x}`).subscribe((data)=>{
        this.pokeList.push({name: this.capitalizeFirst(data.name), id: x, hp: data.stats[0].base_stat, element: this.capitalizeFirst(data.types[0].type.name),
           weight: data.weight, imageMain: data.sprites.other.home.front_default, imageAlt: data.sprites.other["official-artwork"].front_default, generation: generationFind(x) })
      })
    }
  }

  getPokemonBasic():PokemonBasic[]{
    const generationSettings = this.filterService.getGenerationSettings()
    const elementSettings = this.filterService.getElementSettings()
    return this.filterService.sortPokemon(this.pokeList.filter(poke => elementSettings[poke.element])
    .filter(poke => generationSettings[poke.generation]))
  }

  capitalizeFirst(string:string):string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

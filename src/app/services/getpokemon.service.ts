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

  constructor( private http : HttpClient, private filterService: FilterService) {}

  pokeList: PokemonBasic[] = []

  init():boolean{
    for(let x = 1; x < 5; x++){
      this.http.get<jsonData>(`https://pokeapi.co/api/v2/pokemon/${x}`).subscribe((data)=>{
        this.pokeList.push({name: data.name, id: x, hp: data.stats[0].base_stat, element: data.types[0].type.name,
           weight: data.weight, imageMain: data.sprites.other.home.front_default, imageAlt: data.sprites.other["official-artwork"].front_default, generation: generationFind(x) })
      })
    }
    return true
  }

  getPokemonBasic():PokemonBasic[]{
    const generationSettings = this.filterService.getGenerationSettings()
    const elementSettings = this.filterService.getElementSettings()
    return this.filterService.sortPokemon(this.pokeList.filter(poke => elementSettings[poke.element])
    .filter(poke => generationSettings[poke.generation]))
  }
}

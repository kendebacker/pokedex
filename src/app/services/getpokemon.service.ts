import { Injectable, OnInit } from '@angular/core';
import { PokemonBasic } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class GetpokemonService {

  constructor( private http : HttpClient) {}

  pokeList: PokemonBasic[] = []

  init():boolean{
    for(let x = 1; x < 2; x++){
      this.http.get<jsonData>(`https://pokeapi.co/api/v2/pokemon/${x}`).subscribe((data)=>{
        this.pokeList.push({name: data.name, id: x, hp: data.stats[0].base_stat, element: data.types[0].type.name,
           weight: data.weight, imageMain: data.sprites.other.home.front_default, imageAlt: data.sprites.other["official-artwork"].front_default })
      })
    }
    return true
  }

  get():PokemonBasic[]{
    return this.pokeList
  }
}

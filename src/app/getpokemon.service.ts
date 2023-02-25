import { Injectable, OnInit } from '@angular/core';
import { PokemonBasic } from './pokemonBasic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface basic{
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class GetpokemonService {

  constructor(private http : HttpClient) {}

  pokeList!: PokemonBasic[]
  temp:Array<String> =[]



  init():void{
    for(let x = 1; x < 1009; x++){
      this.http.get<basic>(`https://pokeapi.co/api/v2/pokemon/${x}`).subscribe((data)=>{
        this.temp.push(data.name)
      })
    }
  }

  show():void{
    console.log(this.temp)
  }
}

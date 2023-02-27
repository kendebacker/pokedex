import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemonDetailed, jsonDataDetailed } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private location: Location){}

  data!:pokemonDetailed;
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get("id")
    this.http.get<jsonDataDetailed>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .subscribe((data)=>  {
      this.data = {
        abilities: data.abilities.map(el => el.ability.name),
        base_experience: data.base_experience,
        height: data.height,
        id: data.id,
        order: data.order,
        weight:  data.weight,
        name: data.name,
        moves: data.moves.map(el => el.move.name),
        stats: data.stats.map(el => {return{stat: el.base_stat, effort: el.effort, name: el.stat.name}}),
        types: data.types.map(el => el.type.name),
        images: [data.sprites.other.home.front_default, data.sprites.other['official-artwork'].front_default]
      }
    }) 
  }

  goBack():void{
    this.location.back()
  }

}

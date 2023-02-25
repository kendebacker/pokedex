import { Component, OnInit } from '@angular/core';
import { GetpokemonService } from '../getpokemon.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

constructor( private pokeService:GetpokemonService){}

ngOnInit(): void {
  this.pokeService.init()
}

}

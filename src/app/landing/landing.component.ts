import { Component, AfterViewInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit{

constructor( private pokeService:GetpokemonService){}

pokemonLoaded: boolean = true

ngAfterViewInit(): void {
  this.pokemonLoaded = !this.pokeService.init()
}

}

import { Component, AfterViewInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss','../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LandingComponent implements AfterViewInit{

constructor( private pokeService:GetpokemonService){}

pokemonLoaded: boolean = true

ngAfterViewInit(): void {
  this.pokemonLoaded = !this.pokeService.init()
}

}

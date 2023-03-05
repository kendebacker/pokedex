import { Component, AfterViewInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss','../app.component.scss'],
})

export class LandingComponent implements AfterViewInit{

constructor( private pokeService:GetpokemonService, private router: Router){}

pokemonLoaded: boolean = true

ngAfterViewInit(): void {
  this.pokeService.init()
  this.pokemonLoaded = false
}

goList():void{
  this.router.navigateByUrl("pokelist")
}

}

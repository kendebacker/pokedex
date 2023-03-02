import { Component, AfterViewInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss',],
  encapsulation: ViewEncapsulation.None,
})

export class LandingComponent implements AfterViewInit{

constructor( private pokeService:GetpokemonService, private router: Router){}

pokemonLoaded: boolean = true

ngAfterViewInit(): void {
  this.pokeService.init()
  this.pokemonLoaded = false
}

goList():void{
  this.router.navigateByUrl("list")
}

}

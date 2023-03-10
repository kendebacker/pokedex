import { Component, AfterViewInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../app.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  constructor(public pokeService: GetpokemonService, private router: Router) {
    this.pokemonLoaded = pokeService.pokeLoaded;
  }

  pokemonLoaded = false;

  ngAfterViewInit(): void {
    this.pokeService.init();
  }

  goList(): void {
    this.router.navigateByUrl('pokelist');
  }
}

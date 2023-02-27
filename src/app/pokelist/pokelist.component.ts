import { Component , OnInit} from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { PokemonBasic } from '../interfaces/interfaces';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss','../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokelistComponent {
  constructor(public getPokemon: GetpokemonService){}

  ngOnInit(){
    this.getPokemon.getPokemonBasic()
  }
}

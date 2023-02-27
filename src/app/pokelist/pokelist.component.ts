import { Component , OnInit} from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { PokemonBasic } from '../interfaces/interfaces';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent {
  constructor(public getPokemon: GetpokemonService){}

  ngOnInit(){
    this.getPokemon.getPokemonBasic()
  }
}

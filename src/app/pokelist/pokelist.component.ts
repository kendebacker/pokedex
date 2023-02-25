import { Component } from '@angular/core';
import { GetpokemonService } from '../getpokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent {
  constructor(private getPokemon: GetpokemonService){}

  show():void{
    this.getPokemon.show()
  }
}

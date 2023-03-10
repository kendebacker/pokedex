import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonBasic } from '../interfaces/interfaces';

@Component({
  selector: 'app-pokebasic',
  templateUrl: './pokebasic.component.html',
  styleUrls: ['./pokebasic.component.scss', '../app.component.scss'],
})
export class PokebasicComponent {
  @Input() pokeData!: PokemonBasic;
  @Input() imageOption!: boolean;
  @Input() index!: number;
  @Output() selectPokemon = new EventEmitter<number>();

  goDetailView(id: number) {
    this.selectPokemon.emit(id);
  }
}

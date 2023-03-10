import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterService } from './filter.service';
import { PokemonBasic, jsonData } from '../interfaces/interfaces';
import { generationFind } from './generationFind';

@Injectable({
  providedIn: 'root',
})
export class GetpokemonService {
  constructor(private http: HttpClient, private filterService: FilterService) {}

  pokeList: PokemonBasic[] = [];
  pageSize = 15;
  pokeLoaded = false;

  getPageSize(): number {
    return this.pageSize;
  }

  updatePageSize(newSize: number) {
    this.pageSize = newSize;
  }

  pokeListComplete(): boolean {
    // # pokemon = 1008
    return this.pokeList.length === 1008;
  }
  // 1 -> 1009
  init(): void {
    for (let x = 1; x < 1009; x++) {
      this.http
        .get<jsonData>(`https://pokeapi.co/api/v2/pokemon/${x}`)
        .subscribe((data) => {
          this.pokeList.push({
            name: this.capitalizeFirst(data.name),
            id: x,
            hp: data.stats[0].base_stat,
            element: this.capitalizeFirst(data.types[0].type.name),
            weight: data.weight,
            imageMain: data.sprites.other.home.front_default,
            imageAlt: data.sprites.other['official-artwork'].front_default,
            generation: generationFind(x),
          });
        });
    }
  }

  getPokemonBasic(): PokemonBasic[] {
    const generationSettings = this.filterService.getGenerationSettings();
    const elementSettings = this.filterService.getElementSettings();
    return this.filterService.sortPokemon(
      this.pokeList
        .filter((poke) => elementSettings[poke.element])
        .filter((poke) => generationSettings[poke.generation])
    );
  }

  capitalizeFirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

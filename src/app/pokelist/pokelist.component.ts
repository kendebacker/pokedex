import { Component, OnInit } from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { FilterService } from '../services/filter.service';
import {
  PokemonBasic,
} from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { GetelementsService } from '../services/getelements.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss', '../app.component.scss'],
})
export class PokelistComponent implements OnInit {
  constructor(
    public getPokemon: GetpokemonService,
    public filter: FilterService,
    public getElements: GetelementsService,
    private router: Router
  ) {
    if (!router.navigated) {
      router.navigateByUrl('');
    }
  }

  generations: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  elements: string[] = [
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Psychic',
    'Electric',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
  ];

  pokeList!: PokemonBasic[];
  sorting!: string;
  ActiveTypes!: string[];
  ActiveGenerations!: string;
  pageEvent!: PageEvent;
  

  ngOnInit() {
    const elements = this.getElements.getElements();
    const tempList = this.getPokemon.getPokemonBasic();
    this.pokeList = tempList.slice(
      this.getPokemon.getPageIndex() * this.getPokemon.getPageSize(),
      Math.min(tempList.length, this.getPokemon.getPageIndex() * this.getPokemon.getPageSize() + this.getPokemon.getPageSize())
    );
    this.sorting = this.filter.getSortSetting();
    const elFilter = this.filter.getElementSettings();
    const genFilter = this.filter.getGenerationSettings();
    this.ActiveTypes = this.elements
      .filter((el) => elFilter[el])
      .map((el) => elements[el]);
    const genTemp = this.generations.filter((gen) => genFilter[gen]);
    this.ActiveGenerations = genTemp
      .map((el, ind) => {
        if (ind === genTemp.length - 1) {
          return `${el}`;
        } else {
          return `${el}, `;
        }
      })
      .join('');
  }

  changeImage(): void {
    this.filter.changeImage();
  }

  updatePage(event: PageEvent) {
    this.getPokemon.updatePageSize(event['pageSize']);
    this.getPokemon.updatePageIndex(event['pageIndex']);
    const tempList = this.getPokemon.getPokemonBasic();
    this.pokeList = tempList.slice(
      event['pageIndex'] * event['pageSize'],
      Math.min(event['pageIndex'] * event['pageSize'] + event['pageSize'])
    );
  }
}

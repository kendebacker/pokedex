import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import {
  GenerationFilter,
  ElementFilter,
  elementObject,
} from '../interfaces/interfaces';
import { GetelementsService } from '../services/getelements.service';
import { GetpokemonService } from '../services/getpokemon.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../app.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    public filterService: FilterService,
    private location: Location,
    private getElements: GetelementsService,
    private getPokemonService: GetpokemonService,
    private router: Router,
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
    'Fire',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Ground',
    'Electric',
    'Dragon',
    'Psychic',
    'Water',
    'Ice',
    'Grass',
    'Dark',
    'Fairy',
  ];
  sortSettings: string[] = [
    'ID',
    'Generation',
    'Weight',
    'HP',
    'Element',
    'Name',
  ];
  generationFilter: GenerationFilter =
    this.filterService.getGenerationSettings();
  elementFilter: ElementFilter = this.filterService.getElementSettings();
  sortSetting = this.filterService.getSortSetting();
  elementMap!: elementObject;

  ngOnInit() {
    this.elementMap = this.getElements.getElements();
  }

  updateGeneration(num: number): void {
    this.generationFilter = this.filterService.updateGeneration(num);
    this.getPokemonService.updatePageIndex(0);
  }

  updateElement(el: string): void {
    this.elementFilter = this.filterService.updateElement(el);
    this.getPokemonService.updatePageIndex(0);
  }

  updateSort(el: string): void {
    this.sortSetting = this.filterService.updateSortSetting(el);
    this.getPokemonService.updatePageIndex(0);
  }

  goBack(): void {
    this.location.back();
  }
}

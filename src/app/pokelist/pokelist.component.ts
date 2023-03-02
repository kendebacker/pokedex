import { Component , OnInit} from '@angular/core';
import { GetpokemonService } from '../services/getpokemon.service';
import { FilterService } from '../services/filter.service';
import { PokemonBasic, ElementFilter, GenerationFilter, elementObject } from '../interfaces/interfaces';
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { GetelementsService } from '../services/getelements.service';


@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss','../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokelistComponent implements OnInit {
  constructor(public getPokemon: GetpokemonService, private filter: FilterService, public getElements: GetelementsService){
  }

  generations: number[] = [1,2,3,4,5,6,7,8,9]
  elements: string[] = ["Normal", "Fighting", "Flying","Poison", "Ground",  "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Psychic", "Electric", "Ice", "Dragon", "Dark", "Fairy"]

  pokeList!: PokemonBasic[]
  sorting!: string
  ActiveTypes!: string[]
  ActiveGenerations!: string

  ngOnInit(){
    const elements = this.getElements.getElements()
    this.pokeList = this.getPokemon.getPokemonBasic()
    this.sorting = this.filter.getSortSetting()
    const elFilter = this.filter.getElementSettings()
    const genFilter = this.filter.getGenerationSettings()
    this.ActiveTypes = this.elements.filter(el => elFilter[el]).map(el => elements[el])
    this.ActiveGenerations = this.generations.filter(gen => genFilter[gen]).map((el,ind) => {
      if(ind === this.generations.length-1){
        return `${el}`
      }else{
        return `${el}, `
      }
    }).join("")
  }

}

import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { GenerationFilter, ElementFilter,elementObject } from '../interfaces/interfaces';
import { GetelementsService } from '../services/getelements.service';
import { Location } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss','../app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FilterComponent implements OnInit{

    constructor(public filterService: FilterService, private location: Location, private getElements: GetelementsService){}
    generations: number[] = [1,2,3,4,5,6,7,8,9]
    elements: string[] = ["Normal", "Fighting", "Flying","Poison", "Ground",  "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Psychic", "Electric", "Ice", "Dragon", "Dark", "Fairy"]
    sortSettings: string[] = ["ID","Weight", "HP","Element", "Name"]
    generationFilter : GenerationFilter = this.filterService.getGenerationSettings()
    elementFilter : ElementFilter = this.filterService.getElementSettings()
    sortSetting: string = "ID"
    elementMap!: elementObject

    ngOnInit(){
      this.elementMap = this.getElements.getElements()
    }

    updateGeneration(num: number):void{
      this.generationFilter = this.filterService.updateGeneration(num)
    }

    updateElement(el: string):void{
      this.elementFilter = this.filterService.updateElement(el)
    }

    updateSort(el: string):void{
      this.sortSetting = this.filterService.updateSortSetting(el)
    }

    goBack():void{
      this.location.back()
    }
}

import { Component } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { GenerationFilter, ElementFilter } from '../interfaces/interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

    constructor(public filterService: FilterService){}
    generations: number[] = [1,2,3,4,5,6,7,8,9]
    elements: string[] = ["Normal", "Fighting", "Flying","Poison", "Ground",  "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Psychic", "Electric", "Ice", "Dragon", "Dark", "Fairy"]
    sortSettings: string[] = ["ID", "Generation","Weight", "HP","Element", "Name"]
    generationFilter : GenerationFilter = this.filterService.getGenerationSettings()
    elementFilter : ElementFilter = this.filterService.getElementSettings()
    sortSetting: string = "ID"


    updateGeneration(num: number):void{
      this.generationFilter = this.filterService.updateGeneration(num)
    }

    updateElement(el: string):void{
      this.elementFilter = this.filterService.updateElement(el)
    }

    updateSort(el: string):void{
      this.sortSetting = this.filterService.updateSortSetting(el)
    }
}

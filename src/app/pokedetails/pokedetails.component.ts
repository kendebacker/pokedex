import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonDetailed, jsonDataDetailed } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss', '../app.component.scss'],
})
export class PokedetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location,
    private filter: FilterService,
    private router: Router,
  ) {
    if (!router.navigated) {
      router.navigateByUrl('');
    }
  }

  data!: pokemonDetailed;
  imageOption!: boolean;

  ngOnInit() {
    this.imageOption = this.filter.getImageOption();
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<jsonDataDetailed>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe((data) => {
        this.data = {
          abilities: data.abilities.map((el) => this.cap(el.ability.name)),
          base_experience: data.base_experience,
          height: data.height,
          id: data.id,
          order: data.order,
          weight: data.weight,
          name: this.cap(data.name),
          moves: data.moves.map((el) => this.cap(el.move.name)).sort(),
          stats: data.stats.map((el) => {
            return {
              stat: el.base_stat,
              effort: el.effort,
              name: this.cap(el.stat.name),
            };
          }),
          types: data.types.map((el) => this.cap(el.type.name)),
          images: [
            data.sprites.other.home.front_default,
            data.sprites.other['official-artwork'].front_default,
          ],
        };
      });
  }

  goBack(): void {
    this.location.back();
  }

  cap(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  changeImage(): void {
    this.imageOption = !this.imageOption;
  }
}

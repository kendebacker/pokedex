import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent {

  constructor(private router: ActivatedRoute){}

}

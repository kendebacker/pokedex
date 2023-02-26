import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'pokelist', component: PokelistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

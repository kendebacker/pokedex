import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { PokebasicComponent } from './pokebasic/pokebasic.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PokelistComponent,
    FilterComponent,
    PokebasicComponent,
    PokedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

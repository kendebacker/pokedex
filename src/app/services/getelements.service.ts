import { Injectable } from '@angular/core';

interface elementObject {
  normal: string
  fighting: string
  flying: string
  poison: string
  ground: string
  rock:string
  bug: string
  ghost:string
  steel: string
  fire: string
  water: string
  grass: string
  psychic:string
  electric: string
  ice: string
  dragon: string
  dark: string
  fairy:string
}

@Injectable({
  providedIn: 'root'
})
export class GetelementsService {


  symbols: elementObject = {
  normal: "https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png",
  fighting: "https://archives.bulbagarden.net/media/upload/3/3b/Fighting_icon_SwSh.png",
  flying: "https://bulbapedia.bulbagarden.net/wiki/File:Flying_icon_SwSh.png",
  poison: "https://bulbapedia.bulbagarden.net/wiki/File:Poison_icon_SwSh.png",
  ground: "https://bulbapedia.bulbagarden.net/wiki/File:Ground_icon_SwSh.png",
  rock: "https://archives.bulbagarden.net/media/upload/1/11/Rock_icon_SwSh.png",
  bug: "https://bulbapedia.bulbagarden.net/wiki/File:Bug_icon_SwSh.png",
  ghost: "https://archives.bulbagarden.net/media/upload/0/01/Ghost_icon_SwSh.png",
  steel: "https://archives.bulbagarden.net/media/upload/0/09/Steel_icon_SwSh.png",
  fire: "https://archives.bulbagarden.net/media/upload/a/ab/Fire_icon_SwSh.png",
  water: "https://archives.bulbagarden.net/media/upload/8/80/Water_icon_SwSh.png",
  grass: "https://archives.bulbagarden.net/media/upload/a/a8/Grass_icon_SwSh.png",
  psychic: "https://archives.bulbagarden.net/media/upload/7/7b/Electric_icon_SwSh.png",
  electric: "https://archives.bulbagarden.net/media/upload/7/73/Psychic_icon_SwSh.png",
  ice: "https://archives.bulbagarden.net/media/upload/1/15/Ice_icon_SwSh.png",
  dragon: "https://archives.bulbagarden.net/media/upload/7/70/Dragon_icon_SwSh.png",
  dark: "https://archives.bulbagarden.net/media/upload/d/d5/Dark_icon_SwSh.png",
  fairy: "https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png"}

  getElements():elementObject{
    return this.symbols
  }


}

import { Injectable } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  src: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public allPokemon: Pokemon[] = [
    {
      id: 1,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      name: 'bulbasaur',
    },
    {
      id: 2,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      name: 'ivysaur',
    },
    {
      id: 3,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      name: 'venusaur',
    },
    {
      id: 4,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      name: 'charmander',
    },
    {
      id: 5,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      name: 'charmeleon',
    },
    {
      id: 6,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      name: 'charizard',
    },
    {
      id: 7,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      name: 'squirtle',
    },
    {
      id: 8,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      name: 'wartortle',
    },
    {
      id: 9,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      name: 'blastoise',
    },
    {
      id: 10,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      name: 'caterpie',
    },
    {
      id: 11,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      name: 'metapod',
    },
    {
      id: 12,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      name: 'butterfree',
    },
    {
      id: 13,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      name: 'weedle',
    },
    {
      id: 14,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      name: 'kakuna',
    },
    {
      id: 15,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      name: 'beedrill',
    },
    {
      id: 16,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      name: 'pidgey',
    },
    {
      id: 17,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      name: 'pidgeotto',
    },
    {
      id: 18,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      name: 'pidgeot',
    },
    {
      id: 19,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      name: 'rattata',
    },
    {
      id: 20,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      name: 'raticate',
    },
    {
      id: 21,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
      name: 'spearow',
    },
    {
      id: 22,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
      name: 'fearow',
    },
    {
      id: 23,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
      name: 'ekans',
    },
    {
      id: 24,
      src:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
      name: 'arbok',
    },
  ];

  constructor() {}
}

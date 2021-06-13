import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  //configurando a API

  private Pokedex = require('pokedex-promise-v2');

  private options = {
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000, // 5s
  };

  public pokemonsInterval = {
    limit: 10,
    offset: 0,
  };

  public itemsInterval = {
    limit: 10,
    offset: 0,
  };

  public movesInterval = {
    limit: 10,
    offset: 0,
  };

  public P = new this.Pokedex(this.options);

  constructor() {}
}

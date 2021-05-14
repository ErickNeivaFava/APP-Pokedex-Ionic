import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public Pokedex = require('pokedex-promise-v2');

  public options = {
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000, // 5s
  };

  public interval = {
    limit: 30,
    offset: 0,
  };

  public P = new this.Pokedex(this.options);

  constructor() { }
}

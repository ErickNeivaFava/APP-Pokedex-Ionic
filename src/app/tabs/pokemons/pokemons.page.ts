import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

  public currentFilter: string;
  public pokes: Pokemon[];
  public filteredPokes: Pokemon[];

  ngOnInit() {
    this.pokes = this.pokemonService.allPokemon;
    this.filteredPokes = this.pokes;
    //   this.getAllPokes();
  }

  constructor(
    private pokemonService: PokemonService,
    private filterService: FilterService
  ) {
  }

  public updateFilter() {
    this.filteredPokes = this.filterService.filterPokeByName(this.pokes, this.currentFilter);
  }
  // public Pokedex = require('pokedex-promise-v2');

  // public options = {
  //   protocol: 'https',
  //   hostName: 'pokeapi.co',
  //   versionPath: '/api/v2/',
  //   cacheLimit: 100 * 1000, // 100s
  //   timeout: 5 * 1000 // 5s
  // }

  // public P = new this.Pokedex(this.options);
  // public getAllPokes() {

  //   for (let i = 1; i <= 24; i++) {
  //     this.P.getPokemonByName(i) // with Promise
  //       .then(function (response) {

  //         //this.pokes.push(i, response.species.name);

  //         console.log(i);
  //         console.log(response.species.name);

  //       })
  //       .catch(function (error) {
  //         console.log('There was an ERROR: ', error);
  //       });
  //   }
  // }

  // public getPoke(id) {

  //   var P = new this.Pokedex(this.options);

  //   this.P.getPokemonByName(id) // with Promise
  //     .then(function (response) {
  //       console.log(response);
  //       console.log(response.id);
  //       console.log(response.species.name);
  //       console.log(response.sprites.front_default);

  //       return response;
  //     })
  //     .catch(function (error) {
  //       console.log('There was an ERROR: ', error);
  //     });

  //   this.P.getPokemonsList()
  //     .then(function (response) {
  //       console.log(response);
  //       response.results;
  //     })
  // }
}

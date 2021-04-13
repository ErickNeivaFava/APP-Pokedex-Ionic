import { Component, OnInit } from '@angular/core';


interface Poke {
  id: number;
  nome: string;
}


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {

  public Pokedex = require('pokedex-promise-v2');

  public options = {
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
  }

  public P = new this.Pokedex(this.options);

  /* 
  public newPokeNome = '';

  public currentFilter: '' = '';

  public currentSearch = '';
  */

  public pokes: Poke[] = [

    { id: 1, nome: "Bulbasaur" },
    { id: 2, nome: "Ivysaur" },
    { id: 3, nome: "Venusaur" },
    { id: 4, nome: "Charmander" },
    { id: 5, nome: "Charmeleon" },
    { id: 6, nome: "Charizard" },
    { id: 7, nome: "Squirtle" },
    { id: 8, nome: "Wartortle" },
    { id: 9, nome: "Blastoise" },
    { id: 10, nome: "Caterpie" },
    { id: 11, nome: "Metapod" },
    { id: 12, nome: "Butterfree" },
    { id: 13, nome: "Weedle" },
    { id: 14, nome: "Kakuna" },
    { id: 15, nome: "Beedrill" },
    { id: 16, nome: "Pidgey" },
    { id: 17, nome: "Pidgeotto" },
    { id: 18, nome: "Pidgeot" },
    { id: 19, nome: "Rattata" },
    { id: 20, nome: "Raticate" },
    { id: 21, nome: "Spearow" },
    { id: 22, nome: "Fearow" },
    { id: 23, nome: "Ekans" },
    { id: 24, nome: "Arbok" }

  ];
  //public filteredPokes: Poke[] = this.pokes;

  constructor() { }

  ngOnInit() {

    this.getAllPokes();

  }

  public getAllPokes() {

    for (let i = 1; i <= 24; i++) {
      this.P.getPokemonByName(i) // with Promise
        .then(function (response) {

          //this.pokes.push(i, response.species.name);

          console.log(i);
          console.log(response.species.name);

        })
        .catch(function (error) {
          console.log('There was an ERROR: ', error);
        });
    }

  }

  /*   
  
  filtro para implementar no futuro

  public updateFilter() {
    let filteredBySegment: Poke[];
    filteredBySegment = this.pokes.filter(pokes => pokes.nome);
    if (this.currentSearch === '') {
      this.filteredPokes = filteredBySegment;
    } else {
      const lowercase = this.currentSearch.toLowerCase()
      this.filteredPokes = filteredBySegment.filter(
        pokes => pokes.nome.toLowerCase().includes(lowercase)
      );
    }
  }*/

  public getPoke(id) {

    //var P = new this.Pokedex(this.options);

    this.P.getPokemonByName(id) // with Promise
      .then(function (response) {
        console.log(response);
        console.log(response.id);
        console.log(response.species.name);
        console.log(response.sprites.front_default);

        return response;
      })
      .catch(function (error) {
        console.log('There was an ERROR: ', error);
      });

    this.P.getPokemonsList()
      .then(function (response) {
        console.log(response);
        response.results;
      })

  }

}
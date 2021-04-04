import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {

    var Pokedex = require('pokedex-promise-v2');

    var options = {
      protocol: 'https',
      hostName: 'pokeapi.co',
      versionPath: '/api/v2/',
      cacheLimit: 100 * 1000, // 100s
      timeout: 5 * 1000 // 5s
    }
  
    var P = new Pokedex(options);

    P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

  }



}

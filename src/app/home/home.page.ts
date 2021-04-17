import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Pokedex = require('pokedex-promise-v2');

  public options = {
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
  }

  public userName = '';

  public userPassword = '';

  public checked = false;

  public showData() {
    if (this.userName === '' || this.userPassword === '') {
      console.log(`Invalid username or password `)
    } else {
      console.log(`Username: ${this.userName}   Password: ${this.userPassword}`);
    }
    this.userName = '';
    this.userPassword = '';
  }

  public toggleCheck() {
    this.checked = !this.checked;
    console.log(`Checked: ${this.checked}`);
  }

  public P = new this.Pokedex(this.options);

  constructor() {

  }

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

import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userName: string = '';
  public userPassword: string = '';
  public rememberMe: boolean;

  constructor(private loginService: LoginService) {
  }

  public showData() {
    this.loginService.checkUserData(this.userName, this.userPassword);
    this.userName = '';
    this.userPassword = '';
  }

  public updateRememberMe() {
    this.loginService.showCheckBoxState(this.rememberMe);
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


  // public getPoke(id) {
  //   //var P = new this.Pokedex(this.options);

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

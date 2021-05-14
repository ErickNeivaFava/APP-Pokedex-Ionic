import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { PokedexService } from '../services/pokedex.service';
import { Pokemon } from '../types/pokemon.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id: number;
  public allFavoritePokemon: Pokemon[];
  public isFavorite: boolean;
  public currentPokemon: Pokemon;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.onLoad();
  }

  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService,
    private pokedexService: PokedexService
  ) {}

  public async onLoad() {
    await this.favoriteService.loadFromStorage();
    this.allFavoritePokemon = this.favoriteService.allFavoritePokemon;
    await this.checkFavorite();
    // this.getPokeEvoChain();
  }

  public favPokemon() {
    this.allFavoritePokemon = this.favoriteService.handleFav(
      this.currentPokemon
    );
    this.checkFavorite();
  }

  public async checkFavorite() {
    await this.getPoke(this.id);
    this.isFavorite = this.favoriteService.checkFav(this.currentPokemon);
  }

  public async getPoke(id: number) {
    const response = await this.pokedexService.P.getPokemonByName(id);
    this.currentPokemon = response;
  }

  // public async getPokeEvoChain() {
  //   const response = await this.pokedexService.P.getPokemonSpeciesList();
  //   for (let result of response.results) {
  //     if (result.name === this.currentPokemon.name) {
  //       let pokemon = await this.http.get<Pokemon>(result.url).toPromise();
  //     }
  //   }
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { Pokemon, PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  public id: number;
  public selectedPokemon: Pokemon;
  public allFavoritePokemon: Pokemon[];
  public isFavorite: boolean;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoriteService: FavoriteService
  ) {
    this.id = +route.snapshot.paramMap.get('id');
    this.selectedPokemon = this.pokemonService.allPokemon.find(
      (pokemon) => pokemon.id === this.id
    );
    this.allFavoritePokemon = this.favoriteService.allFavoritePokemon;
    this.checkFavorite();
  }
  public favPokemon() {
    this.allFavoritePokemon = this.favoriteService.addFav(this.selectedPokemon);
    this.checkFavorite();
  }

  public checkFavorite() {
    return (this.isFavorite = this.allFavoritePokemon.includes(
      this.selectedPokemon
    ));
  }
}

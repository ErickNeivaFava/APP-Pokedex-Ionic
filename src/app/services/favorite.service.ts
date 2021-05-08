import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public allFavoritePokemon: Pokemon[] = [];

  public addFav(pokemonToFavorite: Pokemon): Pokemon[] {
    if (
      // Se achar algum pokémon
      this.allFavoritePokemon.includes(pokemonToFavorite)
    ) {
      // Faça isso
      this.allFavoritePokemon = this.allFavoritePokemon.filter(
        (favoritePokemon) => favoritePokemon.id !== pokemonToFavorite.id
      );
      return this.allFavoritePokemon;
    } else {
      this.allFavoritePokemon.push(pokemonToFavorite);
      return this.allFavoritePokemon;
    }
  }
  constructor() {}
}

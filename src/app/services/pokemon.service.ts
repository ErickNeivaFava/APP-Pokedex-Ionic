import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public allPokemon: Pokemon[] = [];

  public isPokeOnList(pokemon: Pokemon): boolean {
    return this.allPokemon.map((p) => p.id).includes(pokemon.id);
  }

  public async fillPokemonList(response: any) {
    for (let result of response.results) {
      let pokemon = await this.http.get<Pokemon>(result.url).toPromise();
      !this.isPokeOnList(pokemon) ? this.allPokemon.push(pokemon) : '';
    }
  }

  public async getPokemonList() {
    const response = await this.pokedexService.P.getPokemonsList(this.pokedexService.interval)
    this.fillPokemonList(response);
  }

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService
  ) {}
}

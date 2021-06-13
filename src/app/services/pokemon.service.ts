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

  public async fillPokemonList(results: any): Promise<void> {
    for (let result of results) {
      let pokemon = await this.http.get<Pokemon>(result.url).toPromise();
      !this.isPokeOnList(pokemon) ? this.allPokemon.push(pokemon) : '';
    }
  }

  public async getPokemonsList(): Promise<void> {
    const response = await this.pokedexService.P.getPokemonsList(
      this.pokedexService.pokemonsInterval
    );
    this.fillPokemonList(response.results);
  }

  public loadPokemon(event: any): void {
    this.pokedexService.pokemonsInterval.limit += 20;
    this.getPokemonsList();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService
  ) {}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvoChain } from '../types/evoChain.type';
import { Pokemon } from '../types/pokemon.type';
import { PokeSpecies } from '../types/pokeSpecies.type';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public evoChain: EvoChain;
  public allPokemon: Pokemon[] = [];

  public isPokeOnList(pokemon: Pokemon): boolean {
    return this.allPokemon.map((p) => p.id).includes(pokemon.id);
  }

  public async fillPokemonList(results: any): Promise<void> {
    for (const result of results) {
      const pokemon = await this.http.get<Pokemon>(result.url).toPromise();
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

  public getImg(url: string): string {
    const splited = url.split('/').filter((x) => x);
    const id = splited[splited.length - 1];
    return `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  public getId(url: string): string {
    const splited = url.split('/').filter((x) => x);
    const id = splited[splited.length - 1];
    return id;
  }

  public async getEvoChain(id: number): Promise<EvoChain> {
    const response = await this.pokedexService.P.getPokemonByName(id);
    const pokeSpecies = await this.http
      .get<PokeSpecies>(response.species.url)
      .toPromise();
    const evoChain = await this.http
      .get<EvoChain>(pokeSpecies.evolution_chain.url)
      .toPromise();
    return evoChain;
  }

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService
  ) { }
}
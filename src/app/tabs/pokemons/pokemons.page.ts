import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/types/pokemon.type';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  public currentFilter: string;
  public allPokemon: Pokemon[];
  public filteredPokes: Pokemon[];

  constructor(
    private filterService: FilterService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.onLoad();
  }

  public async onLoad(): Promise<void> {
    await this.pokemonService.getPokemonsList();
    this.allPokemon = this.pokemonService.allPokemon;
    this.filteredPokes = this.allPokemon;
  }

  public updateFilter(): void {
    this.filteredPokes = this.filterService.filterPokeByName(
      this.allPokemon,
      this.currentFilter
    );
  }

  public loadMorePokemons(event: any): void {
    this.pokemonService.loadPokemon(event);
  }
}

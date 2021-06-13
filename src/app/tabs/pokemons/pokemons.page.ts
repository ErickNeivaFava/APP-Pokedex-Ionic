import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FilterService } from 'src/app/services/filter.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/types/pokemon.type';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  @ViewChild(IonContent, { static: true })
  public content: IonContent;
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

  public scrollToTop(): void {
    this.content.scrollToTop(2000);
  }
}
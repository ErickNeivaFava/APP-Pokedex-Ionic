import { Injectable } from '@angular/core';
import { Item } from './items.service';
import { Move } from './moves.service';
import { Pokemon } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // Pokémon name filter

  public filterPokeByName(allPokemon: Pokemon[], currentFilter: string) {
    let filteredPokemon: Pokemon[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(currentFilter.trim().toLowerCase()));
      return filteredPokemon;
    }
    else {
      filteredPokemon = allPokemon;
      return filteredPokemon;
    }
  }

    // Items name filter

  public filterItemByName(allItems: Item[], currentFilter: string) {
    let filteredItems: Item[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredItems = allItems.filter(item => item.name.includes(currentFilter.trim().toLowerCase()));
      return filteredItems;
    }
    else {
      filteredItems = allItems;
      return filteredItems;
    }
  }

      // Moves name filter

  public filterMoveByName(allMoves: Move[], currentFilter: string) {
    let filteredMoves: Move[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredMoves = allMoves.filter(moves => moves.name.includes(currentFilter.trim().toLowerCase()));
      return filteredMoves;
    }
    else {
      filteredMoves = allMoves;
      return filteredMoves;
    }
  }

  constructor() { }
}

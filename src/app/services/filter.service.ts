import { Injectable } from '@angular/core';
import { Item } from '../types/item.type';
import { Move } from '../types/move.type';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  // Pokémon name filter

  public filterPokeByName(allPokemon: Pokemon[], currentFilter: string): Pokemon[] {
    let filteredPokemon: Pokemon[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon.name.includes(currentFilter.trim().toLowerCase())
      );
    } else {
      filteredPokemon = allPokemon;
    }
    return filteredPokemon;
  }

  // Items name filter

  public filterItemByName(allItems: Item[], currentFilter: string): Item[] {
    let filteredItems: Item[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredItems = allItems.filter((item) =>
        item.name.includes(currentFilter.trim().toLowerCase())
      );
    } else {
      filteredItems = allItems;
    }
    return filteredItems;
  }

  // Moves name filter

  public filterMoveByName(allMoves: Move[], currentFilter: string): Move[] {
    let filteredMoves: Move[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredMoves = allMoves.filter((moves) =>
        moves.name.includes(currentFilter.trim().toLowerCase())
      );
    } else {
      filteredMoves = allMoves;
    }
    return filteredMoves;
  }

  constructor() { }
}

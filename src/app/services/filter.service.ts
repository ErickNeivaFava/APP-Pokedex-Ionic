import { Injectable } from '@angular/core';
import { Item } from './items.service';
import { Move } from './moves.service';
import { Pokemon } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // Pokémon name filter

  public filterPokeByName(pokes: Pokemon[], currentFilter: string) {
    let filteredPokes: Pokemon[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredPokes = pokes.filter(poke => poke.name.includes(currentFilter.trim().toLowerCase()));
      return filteredPokes;
    }
    else {
      filteredPokes = pokes;
      return filteredPokes;
    }
  }

    // Items name filter

  public filterItemByName(items: Item[], currentFilter: string) {
    let filteredItems: Item[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredItems = items.filter(item => item.name.includes(currentFilter.trim().toLowerCase()));
      return filteredItems;
    }
    else {
      filteredItems = items;
      return filteredItems;
    }
  }

      // Moves name filter

  public filterMoveByName(moves: Move[], currentFilter: string) {
    let filteredMoves: Move[] = [];
    if (currentFilter && currentFilter.trim() !== '') {
      filteredMoves = moves.filter(moves => moves.name.includes(currentFilter.trim().toLowerCase()));
      return filteredMoves;
    }
    else {
      filteredMoves = moves;
      return filteredMoves;
    }
  }

  constructor() { }
}

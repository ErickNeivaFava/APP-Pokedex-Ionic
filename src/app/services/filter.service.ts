import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

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

  constructor() { }
}

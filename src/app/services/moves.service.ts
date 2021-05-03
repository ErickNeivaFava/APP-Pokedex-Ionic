import { Injectable } from '@angular/core';

export interface Move {
  id: number;
  name: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  
  public allMoves: Move[] = [
    { id: 1, power: 90, accuracy: 75, category: 'physical', type: 'normal', name: 'pound' },
    { id: 2, power: 90, accuracy: 75, category: 'physical', type: 'fighting', name: 'karate chop' },
    { id: 3, power: 90, accuracy: 75, category: 'physical', type: 'flying', name: 'wing attack' },
    { id: 4, power: 90, accuracy: 75, category: 'special', type: 'fire', name: 'ember' },
    { id: 5, power: 90, accuracy: 75, category: 'special', type: 'ice', name: 'aurora beam' },
    { id: 6, power: 90, accuracy: 75, category: 'special', type: 'electric', name: 'thunderbolt' },
    { id: 7, power: 90, accuracy: 75, category: 'physical', type: 'dark', name: 'bite' },
    { id: 8, power: 90, accuracy: 75, category: 'special', type: 'electric', name: 'thunder' },
    { id: 9, power: 90, accuracy: 75, category: 'status', type: 'psychic', name: 'agility' },
    { id: 10, power: 90, accuracy: 75, category: 'physical', type: 'water', name: 'aqua tail' },
  ];

  constructor() { }
}

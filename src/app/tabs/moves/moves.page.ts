
import { Component, OnInit } from '@angular/core';

interface Move {
  id: number;
  name: string;
  type: 'eletric' | 'water' | 'fire' | 'ice' | 'psychic' | 'dark' | 'flying' | 'normal' | 'fighting';
  category: 'physical' | 'special' | 'status';
  power: number;
  accuracy: number;
}

@Component({
  selector: 'app-moves',
  templateUrl: './moves.page.html',
  styleUrls: ['./moves.page.scss'],
})

export class MovesPage implements OnInit {  

  public currentFilter: string;

  public updateFilter() {
    if (this.currentFilter && this.currentFilter.trim() !== '') {
      this.filteredMoves = this.moves.filter(move => move.name.includes(this.currentFilter.trim().toLowerCase()));
    }
    else {
      this.filteredMoves = this.moves;
    }
  }

  public moves: Move[] = [
    { id: 1, power: 90, accuracy: 75, category: 'physical', type: 'normal', name: 'pound' },
    { id: 2, power: 90, accuracy: 75, category: 'physical', type: 'fighting', name: 'karate Chop' },
    { id: 3, power: 90, accuracy: 75, category: 'physical', type: 'flying', name: 'wing Attack' },
    { id: 4, power: 90, accuracy: 75, category: 'special', type: 'fire', name: 'ember' },
    { id: 5, power: 90, accuracy: 75, category: 'special', type: 'ice', name: 'aurora Beam' },
    { id: 6, power: 90, accuracy: 75, category: 'special', type: 'eletric', name: 'thunderbolt' },
    { id: 7, power: 90, accuracy: 75, category: 'physical', type: 'dark', name: 'bite' },
    { id: 8, power: 90, accuracy: 75, category: 'special', type: 'eletric', name: 'thunder' },
    { id: 9, power: 90, accuracy: 75, category: 'status', type: 'psychic', name: 'agility' },
    { id: 10, power: 90, accuracy: 75, category: 'physical', type: 'water', name: 'aqua tail' },
  ];

  public filteredMoves: Move[] = this.moves;

  constructor() {

  }

  ngOnInit() {
  }

}

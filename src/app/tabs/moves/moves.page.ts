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

  public moves: Move[] = [
    { id: 0, power: 90, accuracy: 75, category: "physical", type: 'normal', name: "Pound" },
    { id: 1, power: 90, accuracy: 75, category: "physical", type: "fighting", name: "Karate Chop" },
    { id: 2, power: 90, accuracy: 75, category: "physical", type: "flying", name: "Wing Attack" },
    { id: 3, power: 90, accuracy: 75, category: "special", type: "fire", name: "Ember" },
    { id: 4, power: 90, accuracy: 75, category: "special", type: "ice", name: "Aurora Beam" },
    { id: 5, power: 90, accuracy: 75, category: "special", type: "eletric", name: "Thunderbolt" },
    { id: 6, power: 90, accuracy: 75, category: "physical", type: "dark", name: "Bite" },
    { id: 7, power: 90, accuracy: 75, category: "special", type: "eletric", name: "Thunder" },
    { id: 8, power: 90, accuracy: 75, category: "status", type: "psychic", name: "Agility" },
    { id: 9, power: 90, accuracy: 75, category: "physical", type: "water", name: "Aqua Tail" },
  ];

  constructor() {

  }

  ngOnInit() {
  }

}

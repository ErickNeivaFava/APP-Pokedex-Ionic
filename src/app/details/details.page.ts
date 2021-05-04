import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  public id: number;
  public selectedPokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.id = +route.snapshot.paramMap.get('id');
    this.selectedPokemon = this.pokemonService.allPokemon.find(pokemon => pokemon.id === this.id);
  }
}

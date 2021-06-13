import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Ability } from '../types/ability.type';
import { Move } from '../types/move.type';
import { PokemonAbility, PokemonMove } from '../types/pokemon.type';

import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class MovesService {
  public allMoves: Move[] = [];

  public isMoveOnList(move: Move): boolean {
    return this.allMoves.map((move) => move.id).includes(move.id);
  }

  public async fillMovesList(results: any): Promise<void> {
    for (let result of results) {
      let move = await this.http.get<Move>(result.url).toPromise();
      !this.isMoveOnList(move) ? this.allMoves.push(move) : '';
    }
  }

  public async getMovesList(): Promise<void> {
    const response = await this.pokedexService.P.getMovesList(
      this.pokedexService.movesInterval
    );
    this.fillMovesList(response.results);
  }

  public loadMoves(event: any): void {
    this.pokedexService.movesInterval.limit += 20;
    this.getMovesList();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  public async getPokemonMove(pokemonMove: PokemonMove): Promise<void> {
    const { move } = pokemonMove;
    const pokeMove = await this.http.get<Move>(move.url).toPromise();
    const { flavor_text_entries: textEntries } = pokeMove;
    const descMessage = textEntries[2].flavor_text;
    this.callDescriptionToast(descMessage);
  }

  public async getPokemonAbility(
    pokemonAbility: PokemonAbility
  ): Promise<void> {
    const { ability } = pokemonAbility;
    const pokeAbility = await this.http.get<Ability>(ability.url).toPromise();
    const { flavor_text_entries: textEntries } = pokeAbility;
    const descMessage = textEntries[2].flavor_text;
    this.callDescriptionToast(descMessage);
  }

  public async callDescriptionToast(descMessage: string): Promise<void> {
    const toast = await this.toastController.create({
      message: descMessage,
      duration: 2500,
      color: 'light',
    });
    await toast.present();
  }

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService,
    private toastController: ToastController
  ) {}
}

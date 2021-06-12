import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Move } from '../types/move.type';
import { PokemonMove } from '../types/pokemon.type';

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
      this.pokedexService.interval
    );
    this.fillMovesList(response.results);
  }

  public async getPokemonMove(pokemonMove: PokemonMove) {
    const { move } = pokemonMove;
    const pokeMove = await this.http.get<Move>(move.url).toPromise();
    this.callMoveToast(pokeMove);
  }

  public callMoveToast(move: Move) {
    const { flavor_text_entries: textEntries } = move;
    const descMessage = textEntries[2].flavor_text;
    this.moveDescToast(descMessage);
  }

  public async moveDescToast(descMessage: string) {
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

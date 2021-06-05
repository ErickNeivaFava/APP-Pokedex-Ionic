import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Move } from '../types/move.type';

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

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService
  ) { }
}
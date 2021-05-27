import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Move } from '../types/moves.type';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class MovesService {
  public allMoves: Move[] = [];

  public isMoveOnList(move: Move) {
    return this.allMoves.map((move) => move.id).includes(move.id);
  }

  public async fillMovesList(results: any) {
    for (let result of results) {
      let move = await this.http.get<Move>(result.url).toPromise();
      console.log(move)
      !this.isMoveOnList(move) ? this.allMoves.push(move) : '';
    }
  }

  public async getMovesList() {
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
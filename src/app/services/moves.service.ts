import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Move } from '../types/moves.type';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class MovesService {
  public allMoves: Move[] = [
  ];

  public async getMovesList() {
    const response = await this.pokedexService.P.getMovesList(
      this.pokedexService.interval
    );
    console.log(response.results);
  }

  constructor(
    private http: HttpClient,
    private pokedexService: PokedexService
  ) { }
}

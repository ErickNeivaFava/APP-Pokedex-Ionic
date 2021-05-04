import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Move, MovesService } from 'src/app/services/moves.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.page.html',
  styleUrls: ['./moves.page.scss'],
})
export class MovesPage {

  public currentFilter: string;
  public allMoves: Move[];
  public filteredMoves: Move[];

  constructor(
    private movesService: MovesService,
    private filterService: FilterService
  ) {
    this.allMoves = this.movesService.allMoves;
    this.filteredMoves = this.allMoves;
  }

  public updateFilter() {
    this.filteredMoves = this.filterService.filterMoveByName(this.allMoves, this.currentFilter);
  }
}

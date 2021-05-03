import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Move, MovesService } from 'src/app/services/moves.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.page.html',
  styleUrls: ['./moves.page.scss'],
})
export class MovesPage implements OnInit {

  public currentFilter: string;
  public moves: Move[];
  public filteredMoves: Move[];

  ngOnInit() {
    this.moves = this.movesService.allMoves;
    this.filteredMoves = this.moves;
  }

  constructor(
    private movesService: MovesService,
    private filterService: FilterService
  ) { }

  public updateFilter() {
    this.filteredMoves = this.filterService.filterMoveByName(this.moves, this.currentFilter);
  }
}

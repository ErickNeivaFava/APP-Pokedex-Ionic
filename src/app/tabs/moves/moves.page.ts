import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { MovesService } from 'src/app/services/moves.service';
import { Move } from 'src/app/types/move.type';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.page.html',
  styleUrls: ['./moves.page.scss'],
})
export class MovesPage implements OnInit {
  public currentFilter: string;
  public allMoves: Move[];
  public filteredMoves: Move[];

  ngOnInit() {
    this.onLoad();
  }

  constructor(
    private movesService: MovesService,
    private filterService: FilterService,
    private toastController: ToastController
  ) {}

  public async onLoad(): Promise<void> {
    await this.movesService.getMovesList();
    this.allMoves = this.movesService.allMoves;
    this.filteredMoves = this.allMoves;
  }

  public updateFilter(): void {
    this.filteredMoves = this.filterService.filterMoveByName(
      this.allMoves,
      this.currentFilter
    );
  }

  public showMoveDesc(move: Move): void {
    this.movesService.callMoveToast(move);
  }
}

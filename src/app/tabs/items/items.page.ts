import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Item, ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage {
  public currentFilter: string;
  public allItems: Item[];
  public filteredItems: Item[];

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService
  ) {
    this.allItems = this.itemsService.allItems;
    this.filteredItems = this.allItems;
  }

  public updateFilter() {
    this.filteredItems = this.filterService.filterItemByName(
      this.allItems,
      this.currentFilter
    );
  }
}

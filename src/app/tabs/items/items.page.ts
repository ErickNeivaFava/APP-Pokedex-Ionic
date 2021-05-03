import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Item, ItemsService } from 'src/app/services/items.service';  

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  public currentFilter: string;
  public items: Item[];
  public filteredItems: Item[];

  ngOnInit() {
    this.items = this.itemsService.allItems;
    this.filteredItems = this.items;
  }

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService
  ) { }

  public updateFilter() {
    this.filteredItems = this.filterService.filterItemByName(this.items, this.currentFilter);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FilterService } from 'src/app/services/filter.service';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/types/item.type';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  @ViewChild(IonContent, { static: true })
  public content: IonContent;
  public currentFilter: string;
  public allItems: Item[];
  public filteredItems: Item[];

  ngOnInit() {
    this.onLoad();
  }

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService
  ) {}

  public async onLoad(): Promise<void> {
    await this.itemsService.getItemsList();
    this.allItems = this.itemsService.allItems;
    this.filteredItems = this.allItems;
  }

  public updateFilter(): void {
    this.filteredItems = this.filterService.filterItemByName(
      this.allItems,
      this.currentFilter
    );
  }

  public loadMoreItems(event: any): void {
    this.itemsService.loadItems(event);
  }

  public scrollToTop(): void {
    this.content.scrollToTop(2000);
  }
}
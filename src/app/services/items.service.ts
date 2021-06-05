import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../types/item.type';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  public allItems: Item[] = [];

 public isItemOnList(item){
  return this.allItems.map((item) => item.id).includes(item.id);
 }

  public async fillItemsList(results: any){
    for (let result of results) {
    let item = await this.http.get<Item>(result.url).toPromise();
      console.log(item);
      !this.isItemOnList(item) ? this.allItems.push(item) : '';
    }
  }

  public async getItemsList(){
    const response = await this.pokedexService.P.getItemsList(
      this.pokedexService.interval
    );
    this.fillItemsList(response.results)
  }

  constructor(private pokedexService: PokedexService,private http: HttpClient) {
    
  }

}

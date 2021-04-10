import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then( m => m.PokemonsPageModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities/abilities.module').then( m => m.AbilitiesPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

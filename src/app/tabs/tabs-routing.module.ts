import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsPageModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities/abilities.module').then(m => m.AbilitiesPageModule)
  },
  {
    path: 'moves',
    loadChildren: () => import('./moves/moves.module').then(m => m.MovesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }

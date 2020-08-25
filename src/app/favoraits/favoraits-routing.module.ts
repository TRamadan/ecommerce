import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoraitsPage } from './favoraits.page';

const routes: Routes = [
  {
    path: '',
    component: FavoraitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoraitsPageRoutingModule {}

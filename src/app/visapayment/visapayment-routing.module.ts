import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisapaymentPage } from './visapayment.page';

const routes: Routes = [
  {
    path: '',
    component: VisapaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisapaymentPageRoutingModule {}

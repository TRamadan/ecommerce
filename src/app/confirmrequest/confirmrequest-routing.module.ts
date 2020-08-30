import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmrequestPage } from './confirmrequest.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmrequestPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmrequestPageRoutingModule } from './confirmrequest-routing.module';

import { ConfirmrequestPage } from './confirmrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmrequestPageRoutingModule
  ],
  declarations: [ConfirmrequestPage]
})
export class ConfirmrequestPageModule {}

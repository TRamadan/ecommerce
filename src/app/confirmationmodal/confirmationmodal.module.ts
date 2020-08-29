import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationmodalPageRoutingModule } from './confirmationmodal-routing.module';

import { ConfirmationmodalPage } from './confirmationmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationmodalPageRoutingModule
  ],
  declarations: [ConfirmationmodalPage]
})
export class ConfirmationmodalPageModule {}

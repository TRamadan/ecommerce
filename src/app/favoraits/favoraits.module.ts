import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoraitsPageRoutingModule } from './favoraits-routing.module';

import { FavoraitsPage } from './favoraits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoraitsPageRoutingModule
  ],
  declarations: [FavoraitsPage]
})
export class FavoraitsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayclubsPageRoutingModule } from './dayclubs-routing.module';

import { DayclubsPage } from './dayclubs.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayclubsPageRoutingModule,
  ],
  declarations: [DayclubsPage]
})
export class DayclubsPageModule {}

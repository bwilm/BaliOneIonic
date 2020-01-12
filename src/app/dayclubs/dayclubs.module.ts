import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayclubsPageRoutingModule } from './dayclubs-routing.module';

import { DayclubsPage } from './dayclubs.page';
import { MapModule } from '../map/map.module';
import { DayclubComponent } from '../dayclub/dayclub.component';
import { MapComponent } from '../map/map.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayclubsPageRoutingModule,
    MapModule
  ],
  declarations: [DayclubsPage, DayclubComponent],
})
export class DayclubsPageModule {}

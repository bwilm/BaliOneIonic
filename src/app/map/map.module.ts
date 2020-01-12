import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { DayclubComponent } from '../dayclub/dayclub.component';




@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
    apiKey: environment.agmAPIkey
  }),

  ]
})
export class MapModule { }

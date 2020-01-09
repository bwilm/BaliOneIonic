import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})





export class FoodPage implements OnInit {

  locations;

  constructor(private ls: LocationsService) {

    this.locations = ls.getLocations();
   }



  ngOnInit() {
  }


}

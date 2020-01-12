import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  locations;

  constructor( private ls: LocationsService) { }

  ngOnInit() {

    this.locations = this.ls.getLocations();
  }

}

import { Component, OnInit, NgZone } from '@angular/core';
import { LocationsService } from '../locations.service';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})




 export class MapComponent implements OnInit {

  lat = -8.68;
  long = 115.17;
  markers;
  locations;
  dcLocations;
  iconUrl = './../../assets/youarehere.png';

  // tslint:disable-next-line: semicolon
constructor(private ls: LocationsService) {

  this.locations = this.ls.getLocations();
  this.dcLocations = this.ls.getDayClubs();
}



  ngOnInit(): void {}



  // tslint:disable-next-line: align
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;

      });
    }
  }
}


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

  // tslint:disable-next-line: semicolon
constructor(private ls: LocationsService) {

  this.locations = this.ls.getLocations();
}



  ngOnInit(): void {
   console.log(this.locations);
  }






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


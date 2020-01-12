import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { LocationsService } from '../locations.service';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})




 export class MapComponent implements OnInit, OnDestroy {

  lat = -8.68;
  long = 115.17;
  markers;
  locations;
  dcLocations;
  iconUrl = './../../assets/youarehere.png';

  // tslint:disable-next-line: semicolon
constructor(private ls: LocationsService) {

  this.dcLocations = this.ls.getDayClubs()

}

showdayClubs(){
  this.locations = this.ls.getDayClubs();

}
showRestaurants(){
  this.locations = this.ls.getLocations();
}


  ngOnInit(){}

  ngOnDestroy(){
    this.locations = null;
    this.dcLocations = null;
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


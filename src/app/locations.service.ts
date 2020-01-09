import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  rslist = [
    {name : 'Warung Nia',
    rating: '1',
    lat: '-8.689475',
    long: '115.167417'
   },
    {name : 'Warung Cerita',
    rating: '5',
    lat: '-8.68541',
    long: '115.167459'
   }
  ];

  constructor() { }

  getLocations(){
    return this.rslist;
  }
}

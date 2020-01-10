import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  rslist = [
    {name : 'Seasalt Seminyak',
    rating: '4',
    price: '5',
    lat: '-8.680580',
    long: '115.150390',
    img: 'https://seasaltseminyak.com/lumonata-plugins/global/background/alila-seminyak-seasalt-exterior-1563930202.jpg',
    // tslint:disable-next-line: max-line-length
    review: 'The vibrancy of an open kitchen, the changing patterns of light and shadow on the outdoor decks throughout the day, and the feel of the ocean breeze also serve to create a remarkable sense of openness and connection to the ocean for a relaxed coastal dining experience.',
    address: 'https://goo.gl/maps/vzk57xX3fRbLjmEN8',
   },
{name : 'Street Boi',
    rating: '5',
    price: '3',
    lat : '-8.680611',
    long: '115.152678',
    img : 'https://www.streetboibali.com/wp-content/uploads/2019/09/slider1.jpg',
    review : 'Born of childhood memories. Fluffy steamed bao with classic fillings feed the beast and the gentle vegetarian. Asian flavours give Seminyak enough spice to write home about. Best washed down with cold beer and artisanal cocktails.',
    address:'https://goo.gl/maps/zqB6f2ryAycpx4fU6'
   },
{name : 'Restaurant Locavore',
    rating : '4',
    price: '5',
    lat: '-8.509876',
    long: '115.263540',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/1b/28/fd/restaurant-locavore.jpg',
    review: 'Locavore guests can anticipate an unforgettable culinary adventure. Led by classically trained chefs Ray and Eelke, the passionate and dedicated kitchen team create unique, contemporary European fare from the finest of locally sourced seasonal ingredients. Artfully presented, meticulously prepared and utterly delicious, the cuisine of Locavore promises an exhilarating fine dining experience.',
    address:'https://goo.gl/maps/hfxCGsyBUDJ54TRP7'
   }
  ];

constructor() { }

getLocations(){
    return this.rslist;
  }

getDayClubs(){
    return;
  }
}

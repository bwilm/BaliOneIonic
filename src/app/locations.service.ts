import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  //restaurant list data object (JSON)
  rslist = [{
      name: 'Seasalt Seminyak',
      rating: '4',
      price: '5',
      lat: '-8.680580',
      long: '115.150390',
      img: 'https://seasaltseminyak.com/lumonata-plugins/global/background/alila-seminyak-seasalt-exterior-1563930202.jpg',
      // tslint:disable-next-line: max-line-length
      review: 'The vibrancy of an open kitchen, the changing patterns of light and shadow on the outdoor decks throughout the day, and the feel of the ocean breeze also serve to create a remarkable sense of openness and connection to the ocean for a relaxed coastal dining experience.',
      address: 'https://goo.gl/maps/vzk57xX3fRbLjmEN8',
    },
    {
      name: 'Street Boi',
      rating: '5',
      price: '3',
      lat: '-8.680611',
      long: '115.152678',
      img: 'https://www.streetboibali.com/wp-content/uploads/2019/09/slider1.jpg',
      review: 'Born of childhood memories. Fluffy steamed bao with classic fillings feed the beast and the gentle vegetarian. Asian flavours give Seminyak enough spice to write home about. Best washed down with cold beer and artisanal cocktails.',
      address: 'https://goo.gl/maps/zqB6f2ryAycpx4fU6'
    },
    {
      name: 'Restaurant Locavore',
      rating: '4',
      price: '5',
      lat: '-8.509876',
      long: '115.263540',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/1b/28/fd/restaurant-locavore.jpg',
      review: 'Locavore guests can anticipate an unforgettable culinary adventure. Led by classically trained chefs Ray and Eelke, the passionate and dedicated kitchen team create unique, contemporary European fare from the finest of locally sourced seasonal ingredients. Artfully presented, meticulously prepared and utterly delicious, the cuisine of Locavore promises an exhilarating fine dining experience.',
      address: 'https://goo.gl/maps/hfxCGsyBUDJ54TRP7'
    }
  ];
  //dayClub list data object (JSON)
  dcList = [{
      name: 'OMNIA Dayclub Bali',
      rating: '5',
      price: '3',
      lat: '-8.846270',
      long: '115.140583',
      img: 'https://indonesia.tripcanvas.co/wp-content/uploads/2018/11/2-2-infinity-pool-740x493.jpg',
      // tslint:disable-next-line: max-line-length
      review: 'An elevated daylife experience. Set atop the limestone cliffs of Uluwatu, OMNIA Bali redefines your daylife experience with a breathtaking design, exceptional service, stunning views of the Indian Ocean and beyond. Experience OMNIA Bali in style and book from our selection of reserved seating options, from VIP Bungalows and Cabanas to Daybeds & Sofas.',
      address: 'https://goo.gl/maps/jeWaZ5qCHcR6tCETA',
    },
    {
      name: 'Potato Head Beach Club Bali',
      rating: '5',
      price: '2',
      lat: '-8.679490',
      long: '115.149894',
      img: 'https://bb.trvcdn.net/uploads/galleries/IMG_1187-lr_1521529203.jpg',
      review: 'Beyond the lounge-bar space, PHBC houses three restaurants where each of them presents its own distinct personalities. Potato Head Bistro serves comfort food inspired by international home cooked recipes. On the other hand, Lilin offers a tapas selection of South East Asian cuisine and choices of exotic live seafood as its main highlight. The journey is not complete without savoring Chef Takes dishes mad with passion and love, at the elegant, yet homey, chandelier-lit restaurant that is Tapping Shoes.',
      address: 'https://goo.gl/maps/xo1ceioa4yKUXpcW6'
    },
    {
      name: 'Ulu Cliffhouse',
      rating: '4',
      price: '5',
      lat: '-8.813964',
      long: '115.091615',
      img: 'https://nowbali.co.id/wp-content/uploads/2017/12/NIT-Ulu-Cliffhouse-768x512.jpg',
      review: 'A clifftop oasis that shakes up the Bali beach club scene with world-class F&B offerings led by Chef Diego Munoz, a cliff edge rock bar and creative residence for music artists, Ulu Cliffhouse is a 50,000ft² clifftop playground nestled in Uluwatu. With direct access to the beach, Ulu’s clifftop playground showcases a 25-metre infinity pool, a music recording studio, an art space and food and drinks – from its open-air restaurant to cliff side rock bar hanging provocatively over the waves',
      address: 'https://goo.gl/maps/7LSuLxFipJPzNV4B9'
    }
  ];

  constructor() {}

  getLocations() {
    return this.rslist;
  }

  getDayClubs() {
    return this.dcList;
  }
}
import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-dayclubs',
  templateUrl: './dayclubs.page.html',
  styleUrls: ['./dayclubs.page.scss'],
})
export class DayclubsPage implements OnInit {

  dayClubs;

  constructor(private ls: LocationsService) { }

  ngOnInit() {
    this.ls.getDayClubs = this.dayClubs;
  }

}

import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-dayclub',
  templateUrl: './dayclub.component.html',
  styleUrls: ['./dayclub.component.scss'],
})
export class DayclubComponent implements OnInit {

  constructor(private ls: LocationsService, ) { }

  dayclubs;

  ngOnInit() {

    this.dayclubs = this.ls.getDayClubs();
  }

}

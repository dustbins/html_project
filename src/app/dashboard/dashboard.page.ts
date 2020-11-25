import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy, AfterViewInit {

  map: Leaflet.Map;

  inventory_stats: [
    {
      item: "Wax Ring",
      change: "-2"
    },
    {
      item: 'Gloves',
      change: "+32"
    }
  ];

  constructor() { }

  ngOnInit() {
    // this.getMap();
  }

  ngAfterViewInit() {
    this.getMap();
    setTimeout(() => {
      this.map.invalidateSize();
    }, 500)
  }

  ngOnDestroy() {
    this.map.remove();
  }


  getMap() {
    this.map = Leaflet.map('mapId').setView([39.993409, -83.006792], 10);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    }).addTo(this.map);
    //40.074183,-83.148621
    //40.067720,-83.003149
    Leaflet.marker([40.220096, -83.059407]).addTo(this.map).bindPopup('Jeff Bezos');
    Leaflet.marker([40.156101, -82.967449]).addTo(this.map).bindPopup('Tony Hawk');
    Leaflet.marker([40.067720, -83.003149]).addTo(this.map).bindPopup('Danica Patrick');
    Leaflet.marker([40.074183, -83.148621]).addTo(this.map).bindPopup('Donald Duck'); //.openPopup();

    // antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
    //   { color: '#FF0000', weight: 5, opacity: 0.6 })
    //   .addTo(this.map);
  }

}

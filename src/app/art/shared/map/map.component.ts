import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'leafletApps';
  // @ts-ignore
  map: Leaflet.Map;

  ngOnInit() {
    this.map = Leaflet.map('map').setView([50.935173, 6.943101], 15);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    Leaflet.marker([50.935173, 6.943101]).addTo(this.map).bindPopup('My office').openPopup();
  }
}

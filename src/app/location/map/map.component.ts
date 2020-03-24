import {Component, Input, OnInit} from '@angular/core';
import {LocationUtils} from '../location.utils';
import {LatLng, latLng, MapOptions, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() markLat: number;
  @Input() markLon: number;
  @Input() markDesc: string;
  @Input() tyleLayer: string = 'osm';

  private position: LatLng;
  private zoom: number;
  private options: MapOptions;


  constructor() {
    this.initOptions();
  }

  ngOnInit() {
    this.center();
  }

  private center() {
    LocationUtils.getPosition().subscribe(position => {
      this.position = latLng(position.coords.latitude, position.coords.longitude);
      this.zoom = 17;
    });
  }

  private initOptions() {
    const tyle = tyleLayer.find(t => t.name === this.tyleLayer);

    this.options = {
      layers: [
        tileLayer(
          tyle.url, {
            maxZoom: 18,
            attribution: tyle.attribution,
            // tileSize: 500,
            // zoomOffset: -1,
            // minZoom: 1,
            crossOrigin: false
          })
      ],
      zoom: 17,
      center: this.position
    };
  }
}

const tyleLayer: TyleLayer[] = [
  {
    name: 'osm',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  {
    name: 'stadia',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  {
    name: 'maptiler',
    url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=q0OSgtssrWFEcPJ0MA4R',
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  }
];

interface TyleLayer {
  name: string,
  url: string,
  attribution: string
}

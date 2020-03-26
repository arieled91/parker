import {Component, Input, OnInit} from '@angular/core';
import {LocationUtils} from '../location.utils';
import {icon, LatLng, latLng, marker, TileLayer, tileLayer} from 'leaflet';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() markLat: number;
  @Input() markLon: number;
  @Input() markDesc: string;

  position: LatLng;
  zoom: number;
  layers;

  constructor() {
  }

  ngOnInit() {
    this.center();
    this.initLayers();
  }

  private center() {
    LocationUtils.getPosition().subscribe(position => {
      this.position = latLng(position.coords.latitude, position.coords.longitude);
      this.zoom = 17;
    });
  }

  options = {
    layers: [tileLayer(mapLayers.maptiler.url, mapLayers.maptiler.options)],
    zoom: 17,
    center: this.position
  };


  defaultIcon = {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };


  private initLayers() {
    setTimeout(() => {
      this.layers = [
        marker(latLng(this.markLat, this.markLon), {...this.defaultIcon}), //parked car
        marker(this.position, {...this.defaultIcon})
      ];
    }, 500);
  }

  layersCtrl: LeafletControlLayersConfig = {
    overlays: {},
    baseLayers: {
      'MapTiler': tileLayer(mapLayers.maptiler.url, mapLayers.maptiler.options),
      'Stadia Maps': tileLayer(mapLayers.stadia.url, mapLayers.stadia.options),
      'Open Street Map': tileLayer(mapLayers.osm.url, mapLayers.osm.options),
     }
  };
}

const mapLayers = {
  maptiler: {
    name: 'MapTiler',
    url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=q0OSgtssrWFEcPJ0MA4R',
    options: {maxZoom: 18, tileSize: 512, zoomOffset: -1, minZoom: 1, crossOrigin: true,
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'}
  },
  stadia: {
    name: 'Stadia Maps',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    options: {maxZoom: 20, attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
  },
  osm: {
    name: 'Open Street Map',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {maxZoom: 20, attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
  }
};

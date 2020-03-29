import {Component, Input, OnInit} from '@angular/core';
import {icon, LatLng, latLng, marker, tileLayer, Map, LeafletEvent} from 'leaflet';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {MapPosition} from './map.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() markLocation?: {lat: number, lon: number};
  @Input() markLon: number;
  @Input() markDesc: string;

  currentPosition: LatLng;
  position: LatLng;
  zoom: number;
  layers;
  userControl: boolean = false;

  constructor(
    private geolocation: Geolocation
  ) {
  }

  ngOnInit() {
    this.geolocation.watchPosition().pipe(
      tap(watch => {
        if(watch.coords) this.currentPosition = latLng(watch.coords.latitude, watch.coords.longitude);
        else this.geolocation.getCurrentPosition()
          .then(pos => this.currentPosition = latLng(pos.coords.latitude, pos.coords.longitude))
      }),
      tap(() => {
        if(!this.userControl) this.center(); //do not center if user moved map manually
      })
    ).subscribe();
  }

  public getPosition(): MapPosition{
    return new MapPosition(this.position.lat, this.position.lng)
  }

  center() {
    this.position = latLng(this.currentPosition.lat, this.currentPosition.lng);
    this.zoom = 17;
    this.initLayers();
  }

  options = {
    layers: [tileLayer(mapLayers.osm.url, mapLayers.osm.options)],
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

  locationIcon = {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/location.svg'
    })
  };



  private initLayers() {
    const carMarker = this.markLocation ? marker(latLng(this.markLocation.lat, this.markLocation.lon), {...this.defaultIcon}) : undefined;

    setTimeout(() => {
      let layerBuiler = [marker(this.currentPosition, {...this.locationIcon})];
      if(carMarker) layerBuiler = [...layerBuiler, carMarker];
      this.layers  = layerBuiler;
    }, 500);
  }

  // layersCtrl: LeafletControlLayersConfig = {
  //   overlays: {},
  //   baseLayers: {
  //     'MapTiler': tileLayer(mapLayers.maptiler.url, mapLayers.maptiler.options),
  //     'Stadia Maps': tileLayer(mapLayers.stadia.url, mapLayers.stadia.options),
  //     'Open Street Map': tileLayer(mapLayers.osm.url, mapLayers.osm.options),
  //    }
  // };

  onMapReady(map: Map) {
  }

  onMoveStart($event: LeafletEvent) {
    this.userControl = true;
  }

  onZoomStart($event: LeafletEvent) {
    this.userControl = true;
  }

  autocenter() {
    this.userControl = false;
    this.center();
  }
}

const mapLayers = {
  maptiler: {
    name: 'MapTiler',
    url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=q0OSgtssrWFEcPJ0MA4R',
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
    options: {maxZoom: 19, attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
  }
};


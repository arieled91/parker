import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {icon, LatLng, latLng, LeafletEvent, Map, marker, Marker, tileLayer} from 'leaflet';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {MapPosition} from './map.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnChanges {

  @Input() savedLocation?: { lat: number, lon: number };
  @Input() markDesc: string;

  currentPosition: LatLng;
  position: LatLng;
  zoom: number;
  layers;
  userControl: boolean = false;
  map: Map;
  centerMarker: Marker;
  savedLocationMarker: Marker;

  options = {
    layers: [tileLayer(mapLayers.osm.url, mapLayers.osm.options)],
    zoom: 17,
    center: this.position
  };

  blueIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  redIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon-2x-red.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  locationIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/location.svg'
    })
  };

  constructor(
    private geolocation: Geolocation
  ) {
  }

  ngOnInit() {
    this.geolocation.watchPosition().pipe(
      tap(watch => {
        if (watch.coords) {
          this.currentPosition = latLng(watch.coords.latitude, watch.coords.longitude);
        } else {
          this.geolocation.getCurrentPosition()
            .then(pos => this.currentPosition = latLng(pos.coords.latitude, pos.coords.longitude));
        }
      }),
      tap(() => {
        if (!this.userControl) {
          this.center();
        } //do not center if user moved map manually
      })
    ).subscribe();
  }

  public getPosition(): MapPosition {
    return new MapPosition(this.position.lat, this.position.lng);
  }

  center() {
    this.position = latLng(this.currentPosition.lat, this.currentPosition.lng);
    this.zoom = 17;
    this.initLayers();
  }


  private initLayers() {
    setTimeout(() => {
      if (this.savedLocation) {
        this.savedLocationMarker = this.buildSavedLocationMarker();
      }
      this.centerMarker = marker(this.map.getCenter(), {...this.blueIcon});
      let layerBuiler = [marker(this.currentPosition, {...this.locationIcon}), this.centerMarker];
      if (this.savedLocationMarker) {
        layerBuiler = [...layerBuiler, this.savedLocationMarker];
      }
      this.layers = layerBuiler;
    }, 500);
  }

  private buildSavedLocationMarker(): Marker {
    return marker(this.carMarkerLatLng(), {...this.redIcon, title: this.markDesc});
  }

  onMapReady(map: Map) {
    this.map = map;
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

  private carMarkerLatLng() {
    return latLng(this.savedLocation.lat, this.savedLocation.lon);
  }

  onMove($event: LeafletEvent) {
    if (this.centerMarker) {
      this.centerMarker.setLatLng(this.map.getCenter());
    }
  }

  ngOnChanges() {
    if (this.savedLocation) {
      if (this.savedLocationMarker) {
        this.savedLocationMarker.setLatLng(this.carMarkerLatLng());
      } else {
        this.savedLocationMarker = this.buildSavedLocationMarker();
        if(this.map) this.map.addLayer(this.savedLocationMarker);
      }
    }
  }
}

const mapLayers = {
  maptiler: {
    name: 'MapTiler',
    url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=q0OSgtssrWFEcPJ0MA4R',
    options: {
      maxZoom: 18, tileSize: 512, zoomOffset: -1, minZoom: 1, crossOrigin: true,
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
    }
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


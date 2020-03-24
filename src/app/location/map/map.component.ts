import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocationUtils} from '../location.utils';
import {MapUtils} from './map.utils';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {

  @Input() markLat: number;
  @Input() markLon: number;
  @Input() markDesc: string;

  private map: any;

  constructor() {
  }

  ngOnInit() {
    this.initMap();
  }


  private initMap(){
    LocationUtils.watchPosition().then(position => {
      this.map = MapUtils.createMap(position.coords.latitude, position.coords.longitude);
      MapUtils.addMarker(this.map, position.coords.latitude, position.coords.longitude)
    }).catch(error => console.log(error));
  }

  private addMark(map){
    if(this.markLat && this.markLon){
      MapUtils.addMarker(map, this.markLat, this.markLon, this.markDesc)
    }
  }

  ngOnDestroy() {
    if(this.map) this.map.remove();
  }



}

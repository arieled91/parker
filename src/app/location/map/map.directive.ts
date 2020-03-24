import {AfterContentChecked, Directive} from '@angular/core';
import {LeafletDirective} from '@asymmetrik/ngx-leaflet';

@Directive({
  selector: '[parkerMap]'
})
export class ParkerMapDirective implements AfterContentChecked{
  leafletDirective: LeafletDirective;

  constructor(leafletDirective: LeafletDirective) {
    this.leafletDirective = leafletDirective;
  }

  ngAfterContentChecked() {
    this.leafletDirective.getMap().invalidateSize(true);
  }
}

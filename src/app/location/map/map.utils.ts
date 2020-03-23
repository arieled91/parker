declare const L;

export class MapUtils{

  public static addMarker(map, lat: number, lon: number, description?: string){
    if(lat && lon){
      if(description){
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(description)
          .openPopup();
      }else{
        L.marker([lat, lon])
          .addTo(map)
          .openPopup();
      }
    }
  }

  public static createMap(lat: number, lon: number): any{
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    return  L.map('map', {
      center: [lat, lon],
      zoom: 17
    }).addLayer(osm);
      // .setView([lat, lon], 17)
      //
  }

}

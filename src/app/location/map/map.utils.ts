export class MapUtils{

  public static addMarker(map, lat: number, lon: number, description?: string){
    this.getLeaflet().then(L => {
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
    }).catch(err => console.log(err));
  }

  public static getLeaflet(): Promise<any> {
    const win = window as any;
    const leafletModule = win.L;
    if (leafletModule && leafletModule.maps) {
      return Promise.resolve(leafletModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
      script.integrity = "sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==";
      script.crossOrigin = "";
      document.body.appendChild(script);
      script.onload = () => {
        const loadedLeafletModule = win.L;
        if (loadedLeafletModule) {
          resolve(loadedLeafletModule);
        } else {
          reject('Leaflet Map not available.');
        }
      };
    });
  }

  public static createMap(name: string, lat: number, lon: number): any{
    this.getLeaflet().then(L => {
      let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
      return  L.map(name, {
        center: [lat, lon],
        zoom: 17
      }).addLayer(osm);
    }).catch(err => console.log(err));


  }

}

export class LocationUtils {
  public static getPosition(): Promise<Position>{

      return new Promise((resolve, reject) => {
        if(!!navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }else return Promise.reject("Geolocation not available");
      });
  }

  public static watchPosition(): Promise<Position>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(resolve, reject);
    });
  }
}

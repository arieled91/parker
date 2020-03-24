import {Observable} from 'rxjs';

export class LocationUtils {

  public static watchPosition(): Observable<Position>{
    return new Observable(observer => {
      if(window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.watchPosition(
          (position) => {
            observer.next(position);
          },
          (error) => observer.error(error)
        );
      } else {
        observer.error('Cannot watch position from browser');
      }
    });
  }

  public static getPosition(): Observable<Position> {
    return new Observable(observer => {
      if(window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => observer.error(error)
        );
      } else {
        observer.error('Cannot get position from browser');
      }
    });
  }
}

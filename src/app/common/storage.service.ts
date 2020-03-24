import {StorageApi} from './storage.api';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import * as moment from 'moment';
import * as uuid from 'uuid';

export class StorageService<T extends Storable> {

  private storage: StorageApi<T>;

  constructor(key: string) {
    this.storage = new StorageApi(key)
  }

  public create(newObject: T): Observable<T> {
    const id: string = uuid.v4(); // generating id
    const object: T = {...newObject, id}; // set id to new object

    return this.findAll().pipe(
      map(objects => {
        if(objects) {
          objects.push(object);
          return objects;
        }else {
          return [object];
        }
      }),
      switchMap(objects => this.storage.set(objects).pipe(
        map(() => object)
      ))
    )
  }

  public findAll(): Observable<T[]> {
    return this.storage.get();
  }

  public find(id: string): Observable<T | null> {
    return this.findAll().pipe(
      map(objects => {
        const filtered = objects.filter(obj => obj.id === id);
        return filtered.length > 0 ? filtered[0] : null;
      })
    )
  }

  public delete(deleteObject: T): Observable<T> {
    return this.findAll().pipe(
      tap(objects => {
        if (objects) {
          const index = objects.findIndex(obj => obj.id === deleteObject.id);
          objects.splice(index, 1);
          return this.storage.set(objects);
        }
      }),
      switchMap(() => of(deleteObject))
    );

  }

  public update(updateObject: T): Observable<T> {
    const modified = {...updateObject, modified: moment().unix()}; // update modified field

    return this.findAll().pipe(
      tap(objects => {
        const indexToUpdate = objects.findIndex(obj => obj.id === updateObject.id);
        if (indexToUpdate >= 0) { objects[indexToUpdate] = modified; } // actually changing the array
        return this.storage.set(objects);
      }),
      map(() => modified)
    )

  }
}

export interface Storable {
  id: string
}

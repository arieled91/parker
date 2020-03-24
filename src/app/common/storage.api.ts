import { Plugins } from '@capacitor/core';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

const { Storage } = Plugins;

export class StorageApi<T> {

  constructor(
    private key: string
  ) {
  }

  set(object: T[]): Observable<T> {
    return from(Storage.set({
      key: this.key,
      value: JSON.stringify(object)
    })).pipe(switchMap(() => object));
  }

  get(): Observable<T[]> {
    return from(Storage.get({key: this.key})).pipe(
      map(ret => JSON.parse(ret.value)),
      map((values: T[]) => values ? values : [])
    );
  }

  async remove() {
    await Storage.remove({key: this.key});
  }

  keys(): Observable<{keys: string[]}> {
    return from(Storage.keys());
  }

  async clear() {
    await Storage.clear();
  }
}

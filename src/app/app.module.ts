import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuPage} from './menu/menu.page';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {StoreModule} from '@ngrx/store';
import {effects, metaReducers, reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {IonicStorageModule} from '@ionic/storage';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {Geolocation} from '@ionic-native/geolocation/ngx';


@NgModule({
  declarations: [
    AppComponent,
    MenuPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: 'parker_db',
      // driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    LeafletModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"car\" class=\"ion-text-capitalize\">Ubicación: {{car?.name}}</ion-title>\n      <ion-title *ngIf=\"!car\">Parker</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"showCarOptions($event, car)\">\n          <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-no-padding\" *ngIf=\"car\">\n    <ion-grid class=\"home-grid ion-no-padding ion-padding-bottom \">\n      <ion-row class=\"map-row margin-bottom-20\"><ion-col>\n        <app-map class=\"map\"\n                [markLat]=\"car.location?.lat\"\n                [markLon]=\"car.location?.lon\"\n                [markDesc]=\"car.name\"></app-map>\n        </ion-col></ion-row>\n\n      <ion-row><ion-col class=\"center\" size=\"11\" size-xs=\"10\">\n        <ion-item>\n          <ion-input placeholder=\"Información adicional\" [(ngModel)]=\"parkInfo\"></ion-input>\n        </ion-item>\n      </ion-col></ion-row>\n\n    </ion-grid>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"saveLocation()\">\n        <ion-icon name=\"save-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/map/map.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/map/map.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\"\n     leaflet parkerMap\n     [leafletOptions]=\"options\"\n     [(leafletCenter)]=\"position\"\n     [(leafletZoom)]=\"zoom\"\n     [leafletLayers]=\"layers\"\n><ion-spinner class=\"spinner\"></ion-spinner>\n</div>\n");

/***/ }),

/***/ "./src/app/home/home-options/home-options.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/home-options/home-options.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOptionsComponent", function() { return HomeOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _car_model_car_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../car/model/car.model */ "./src/app/car/model/car.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _car_store_car_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../car/store/car.store */ "./src/app/car/store/car.store.ts");






let HomeOptionsComponent = class HomeOptionsComponent {
    constructor(navParams, router, carStore) {
        this.navParams = navParams;
        this.router = router;
        this.carStore = carStore;
    }
    dismiss() {
        this.controller.dismiss();
    }
    onAddCar() {
        this.router.navigate(['car']).then(() => this.dismiss());
    }
    onEditCar() {
        this.router.navigate(['car', this.car.id]).then(() => this.dismiss());
    }
    onDeleteCar() {
        this.carStore.delete(this.car);
        this.dismiss();
    }
};
HomeOptionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _car_store_car_store__WEBPACK_IMPORTED_MODULE_5__["CarStore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _car_model_car_model__WEBPACK_IMPORTED_MODULE_2__["Car"])
], HomeOptionsComponent.prototype, "car", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"])
], HomeOptionsComponent.prototype, "controller", void 0);
HomeOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-options-page',
        template: `
      <ion-list>
          <ion-list-header>Opciones</ion-list-header>
          <ion-item button (click)="onAddCar()">
              <ion-icon slot="start"  name="add-outline"></ion-icon>
              <ion-label>Nuevo Auto</ion-label>
          </ion-item>
          <ion-item button *ngIf="car" (click)="onEditCar()">
              <ion-icon slot="start"  name="create-outline"></ion-icon>
              <ion-label>Editar</ion-label>
          </ion-item>
          <ion-item button *ngIf="car" (click)="onDeleteCar()">
              <ion-icon slot="start"  name="trash-outline"></ion-icon>
              <ion-label>Eliminar</ion-label>
          </ion-item>
      </ion-list>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _car_store_car_store__WEBPACK_IMPORTED_MODULE_5__["CarStore"]])
], HomeOptionsComponent);



/***/ }),

/***/ "./src/app/home/home-page/home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/home/home-page/home.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: inline-block;\n  text-align: center;\n}\n\n.home-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\n.map-row {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL3Byb2plY3RzL3Bhcmtlci9zcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtcGFnZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWdyaWR7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5tYXAtcm93e1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4XG59XG4iLCIuY2VudGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ubWFwLXJvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home-page/home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-page/home.page.ts ***!
  \*********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _car_store_car_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../car/store/car.store */ "./src/app/car/store/car.store.ts");
/* harmony import */ var _car_model_car_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../car/model/car.model */ "./src/app/car/model/car.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_options_home_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home-options/home-options.component */ "./src/app/home/home-options/home-options.component.ts");
/* harmony import */ var _location_location_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../location/location.utils */ "./src/app/location/location.utils.ts");








let HomePage = class HomePage {
    constructor(carStore, router, popoverController, loadingController) {
        this.carStore = carStore;
        this.router = router;
        this.popoverController = popoverController;
        this.loadingController = loadingController;
        this.subscriptions = [];
        this.parkInfo = null;
        this.carStore.load();
        this.initLoading();
    }
    ngOnInit() {
        this.subscriptions.push(this.carStore.selected().subscribe(car => {
            this.car = car;
            if (car.location)
                this.parkInfo = car.location.description;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    showCarOptions(event, car) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _home_options_home_options_component__WEBPACK_IMPORTED_MODULE_6__["HomeOptionsComponent"],
                componentProps: { car: car, controller: this.popoverController },
                event: event,
                translucent: true,
                backdropDismiss: true
            });
            return yield popover.present();
        });
    }
    saveLocation() {
        this.loading.present();
        _location_location_utils__WEBPACK_IMPORTED_MODULE_7__["LocationUtils"].getPosition().subscribe((position) => {
            this.loading.dismiss();
            let car = Object.assign({}, this.car, { location: new _car_model_car_model__WEBPACK_IMPORTED_MODULE_3__["CarLocation"](position.coords.latitude, position.coords.longitude, this.parkInfo) });
            this.carStore.update(car);
        }, error => {
            this.loading.dismiss();
            console.log(error);
        });
    }
    initLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Cargando...',
                duration: 30000
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _car_store_car_store__WEBPACK_IMPORTED_MODULE_2__["CarStore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home-page/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_car_store_car_store__WEBPACK_IMPORTED_MODULE_2__["CarStore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home.page */ "./src/app/home/home-page/home.page.ts");




const routes = [
    { path: '', component: _home_page_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"] }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home.page */ "./src/app/home/home-page/home.page.ts");
/* harmony import */ var _home_options_home_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-options/home-options.component */ "./src/app/home/home-options/home-options.component.ts");
/* harmony import */ var _location_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../location/map/map.component */ "./src/app/location/map/map.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _location_map_map_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../location/map/map.directive */ "./src/app/location/map/map.directive.ts");











let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"],
        ],
        declarations: [
            _home_page_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
            _home_options_home_options_component__WEBPACK_IMPORTED_MODULE_7__["HomeOptionsComponent"],
            _location_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
            _location_map_map_directive__WEBPACK_IMPORTED_MODULE_10__["ParkerMapDirective"],
        ],
        entryComponents: [
            _home_options_home_options_component__WEBPACK_IMPORTED_MODULE_7__["HomeOptionsComponent"],
        ]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/location/location.utils.ts":
/*!********************************************!*\
  !*** ./src/app/location/location.utils.ts ***!
  \********************************************/
/*! exports provided: LocationUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationUtils", function() { return LocationUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class LocationUtils {
    static watchPosition() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.watchPosition((position) => {
                    observer.next(position);
                }, (error) => observer.error(error));
            }
            else {
                observer.error('Cannot watch position from browser');
            }
        });
    }
    static getPosition() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition((position) => {
                    observer.next(position);
                    observer.complete();
                }, (error) => observer.error(error));
            }
            else {
                observer.error('Cannot get position from browser');
            }
        });
    }
}


/***/ }),

/***/ "./src/app/location/map/map.component.scss":
/*!*************************************************!*\
  !*** ./src/app/location/map/map.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#parkingMap {\n  height: 300px;\n}\n\n.map {\n  margin: 12px 0 12px 0;\n  min-height: 250px;\n  height: 100%;\n}\n\n.spinner {\n  margin: auto;\n  display: block;\n  top: 50%;\n  bottom: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL3Byb2plY3RzL3Bhcmtlci9zcmMvYXBwL2xvY2F0aW9uL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvY2F0aW9uL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxhQUFBO0FDRWQ7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24vbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJraW5nTWFwIHsgaGVpZ2h0OiAzMDBweDsgfVxuXG4ubWFwe1xuICBtYXJnaW46MTJweCAwIDEycHggMDtcbiAgbWluLWhlaWdodDoyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3Bpbm5lcntcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogNTAlO1xufVxuIiwiI3BhcmtpbmdNYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ubWFwIHtcbiAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBib3R0b206IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/location/map/map.component.ts":
/*!***********************************************!*\
  !*** ./src/app/location/map/map.component.ts ***!
  \***********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _location_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location.utils */ "./src/app/location/location.utils.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);




let MapComponent = class MapComponent {
    constructor() {
        this.tyleLayer = 'osm';
        this.options = this.buildOptions();
    }
    ngOnInit() {
        this.center();
        this.initLayers();
    }
    center() {
        _location_utils__WEBPACK_IMPORTED_MODULE_2__["LocationUtils"].getPosition().subscribe(position => {
            this.position = Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(position.coords.latitude, position.coords.longitude);
            this.zoom = 17;
        });
    }
    buildOptions() {
        const tyle = tyleLayer.find(t => t.name === this.tyleLayer);
        return {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"])(tyle.url, {
                    maxZoom: 18,
                    attribution: tyle.attribution,
                    // tileSize: 500,
                    // zoomOffset: -1,
                    // minZoom: 1,
                    crossOrigin: false
                })
            ],
            zoom: 17,
            center: this.position
        };
    }
    getDefaultIcon() {
        return {
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        };
    }
    initLayers() {
        setTimeout(() => {
            this.layers = [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"])(Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(this.markLat, this.markLon), this.getDefaultIcon()),
                Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"])(this.position, this.getDefaultIcon())
            ];
        }, 500);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapComponent.prototype, "markLat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapComponent.prototype, "markLon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MapComponent.prototype, "markDesc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MapComponent.prototype, "tyleLayer", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/location/map/map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapComponent);

const tyleLayer = [
    {
        name: 'osm',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    {
        name: 'stadia',
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    {
        name: 'maptiler',
        url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=q0OSgtssrWFEcPJ0MA4R',
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    }
];


/***/ }),

/***/ "./src/app/location/map/map.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/location/map/map.directive.ts ***!
  \***********************************************/
/*! exports provided: ParkerMapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkerMapDirective", function() { return ParkerMapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");



let ParkerMapDirective = class ParkerMapDirective {
    constructor(leafletDirective) {
        this.leafletDirective = leafletDirective;
    }
    ngAfterContentChecked() {
        this.leafletDirective.getMap().invalidateSize(true);
    }
};
ParkerMapDirective.ctorParameters = () => [
    { type: _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"] }
];
ParkerMapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[parkerMap]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"]])
], ParkerMapDirective);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
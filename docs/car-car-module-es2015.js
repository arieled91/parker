(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car/components/car-form/car-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car/components/car-form/car-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main\">\n    <ion-header>\n        <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>{{title}}</ion-title>\n            <ion-buttons slot=\"end\">\n                <ion-back-button defaultHref=\"/\" ></ion-back-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n        <div [formGroup]=\"carForm\" *ngIf=\"car\">\n            <ion-item>\n                <ion-label position=\"floating\" color=\"primary\">Nombre:</ion-label>\n                <ion-input formControlName=\"name\" minlength=\"3\" style=\"font-size: 20px\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Marca:</ion-label>\n                <ion-input formControlName=\"brand\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\" >Modelo:</ion-label>\n                <ion-input formControlName=\"model\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\" >Descripción:</ion-label>\n                <ion-input formControlName=\"description\"></ion-input>\n            </ion-item>\n\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button (click)=\"onSave()\">\n                    <ion-icon name=\"save-outline\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </div>\n    </ion-content>\n</div>\n");

/***/ }),

/***/ "./src/app/car/car-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/car/car-routing.module.ts ***!
  \*******************************************/
/*! exports provided: CarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPageRoutingModule", function() { return CarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_car_add_page_car_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/car-add-page/car-add.page */ "./src/app/car/components/car-add-page/car-add.page.ts");
/* harmony import */ var _components_car_edit_page_car_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/car-edit-page/car-edit.page */ "./src/app/car/components/car-edit-page/car-edit.page.ts");





const routes = [
    { path: '', component: _components_car_add_page_car_add_page__WEBPACK_IMPORTED_MODULE_3__["CarAddPage"] },
    { path: ':id', component: _components_car_edit_page_car_edit_page__WEBPACK_IMPORTED_MODULE_4__["CarEditPage"] }
];
let CarPageRoutingModule = class CarPageRoutingModule {
};
CarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarPageRoutingModule);



/***/ }),

/***/ "./src/app/car/car.module.ts":
/*!***********************************!*\
  !*** ./src/app/car/car.module.ts ***!
  \***********************************/
/*! exports provided: CarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPageModule", function() { return CarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_car_add_page_car_add_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/car-add-page/car-add.page */ "./src/app/car/components/car-add-page/car-add.page.ts");
/* harmony import */ var _car_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-routing.module */ "./src/app/car/car-routing.module.ts");
/* harmony import */ var _components_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/car-form/car-form.component */ "./src/app/car/components/car-form/car-form.component.ts");
/* harmony import */ var _components_car_edit_page_car_edit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/car-edit-page/car-edit.page */ "./src/app/car/components/car-edit-page/car-edit.page.ts");









let CarPageModule = class CarPageModule {
};
CarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _car_routing_module__WEBPACK_IMPORTED_MODULE_6__["CarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _components_car_add_page_car_add_page__WEBPACK_IMPORTED_MODULE_5__["CarAddPage"],
            _components_car_edit_page_car_edit_page__WEBPACK_IMPORTED_MODULE_8__["CarEditPage"],
            _components_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_7__["CarFormComponent"]
        ]
    })
], CarPageModule);



/***/ }),

/***/ "./src/app/car/components/car-add-page/car-add.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/car/components/car-add-page/car-add.page.ts ***!
  \*************************************************************/
/*! exports provided: CarAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAddPage", function() { return CarAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_car_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/car.model */ "./src/app/car/model/car.model.ts");
/* harmony import */ var _store_car_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/car.store */ "./src/app/car/store/car.store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let CarAddPage = class CarAddPage {
    constructor(formBuilder, carStore) {
        this.formBuilder = formBuilder;
        this.carStore = carStore;
        this.$car = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _model_car_model__WEBPACK_IMPORTED_MODULE_3__["Car"]());
    }
    onSave(car) {
        this.carStore.create(car);
    }
};
CarAddPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _store_car_store__WEBPACK_IMPORTED_MODULE_4__["CarStore"] }
];
CarAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'car-add-page',
        template: `
      <app-car-form-view [title]="'Nuevo Auto'" [car]="$car | async" (save)="onSave($event)"></app-car-form-view>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _store_car_store__WEBPACK_IMPORTED_MODULE_4__["CarStore"]])
], CarAddPage);



/***/ }),

/***/ "./src/app/car/components/car-edit-page/car-edit.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/car/components/car-edit-page/car-edit.page.ts ***!
  \***************************************************************/
/*! exports provided: CarEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditPage", function() { return CarEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store_car_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/car.store */ "./src/app/car/store/car.store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CarEditPage = class CarEditPage {
    constructor(formBuilder, carStore, activatedRoute) {
        this.formBuilder = formBuilder;
        this.carStore = carStore;
        this.activatedRoute = activatedRoute;
    }
    onSave(car) {
        this.carStore.update(car);
    }
    ngOnInit() {
        this.$car = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(params => this.carStore.select(params.get('id'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.carStore.selected()));
    }
};
CarEditPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _store_car_store__WEBPACK_IMPORTED_MODULE_3__["CarStore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CarEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'car-edit-page',
        template: `
      <app-car-form-view [title]="'Editar Auto'" [car]="$car | async" (save)="onSave($event)"></app-car-form-view>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _store_car_store__WEBPACK_IMPORTED_MODULE_3__["CarStore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], CarEditPage);



/***/ }),

/***/ "./src/app/car/components/car-form/car-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/car/components/car-form/car-form.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci9jb21wb25lbnRzL2Nhci1mb3JtL2Nhci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/car/components/car-form/car-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/car/components/car-form/car-form.component.ts ***!
  \***************************************************************/
/*! exports provided: CarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormComponent", function() { return CarFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_car_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/car.model */ "./src/app/car/model/car.model.ts");




let CarFormComponent = class CarFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = 'Auto';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.buildForm();
    }
    set car(car) {
        this._car = Object.assign({}, car);
    }
    get car() {
        return this._car;
    }
    buildForm() {
        this.carForm = this.formBuilder.group({
            id: [null],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand: [null],
            model: [null],
            description: [null]
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.subscriptions.push(this.carForm.valueChanges.subscribe(val => {
            this.car.id = val.id;
            this.car.name = val.name;
            this.car.brand = val.brand;
            this.car.model = val.model;
            this.car.description = val.description;
        }));
    }
    onSave() {
        this.save.emit(this.car);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    ngOnChanges() {
        if (this.car) {
            this.carForm.patchValue({
                id: this.car.id,
                name: this.car.name,
                brand: this.car.brand,
                model: this.car.model,
                description: this.car.description,
            });
        }
    }
};
CarFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarFormComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarFormComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_car_model__WEBPACK_IMPORTED_MODULE_3__["Car"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_car_model__WEBPACK_IMPORTED_MODULE_3__["Car"]])
], CarFormComponent.prototype, "car", null);
CarFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-form-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car/components/car-form/car-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-form.component.scss */ "./src/app/car/components/car-form/car-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], CarFormComponent);



/***/ })

}]);
//# sourceMappingURL=car-car-module-es2015.js.map
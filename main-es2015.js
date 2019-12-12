(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n    <h1 class=\"text-success my-5\">Benvenuto nell'inventario hardware!</h1>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n    <h2 class=\"text-danger text-center my-5\">Form modifica marche, modelli e caratteristiche</h2>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-9 offset m-5\">\r\n\r\n           <div>\r\n\r\n                <form name=\"formComputers\" [formGroup]=\"formComputers\"\r\n                    class=\"form-group my-5\" (ngSubmit)=\"aggiornaComputers()\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Marca:</label>\r\n                        <input formControlName=\"marca\" class=\"form-control\">\r\n                    </div>\r\n            \r\n                    <hr>\r\n            \r\n                    <div>\r\n                        <label>Nome:</label>\r\n                        <input formControlName=\"nome\" class=\"form-control\">\r\n                    </div>\r\n            \r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>OS:</label>\r\n                        <input formControlName=\"os\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>HD:</label>\r\n                        <input formControlName=\"hd\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>RAM:</label>\r\n                        <input formControlName=\"ram\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>CPU:</label>\r\n                        <input formControlName=\"cpu\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>S/N:</label>\r\n                        <input formControlName=\"seriale\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>Attivo:</label>\r\n                        <input formControlName=\"attivo\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n            \r\n                    <div>\r\n                        <label>Note:</label>\r\n                        <textarea formControlName=\"note\" class=\"form-control\"></textarea>\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>Dipendente:</label>\r\n                        <input formControlName=\"dipendente\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <button [disabled]=\"formComputers.invalid\"\r\n                    class=\"btn btn-success my-4\">Applica modifiche</button>\r\n\r\n                </form>  \r\n\r\n           </div> \r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/magazzino/archivio/archivio.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/magazzino/archivio/archivio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\r\n\r\n<div class=\"container-fluid my-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-3 col-md-2 d-md-block\">\r\n      <h3 class=\"text-secondary\">Marche</h3><br />\r\n      <ul class=\"list-group mt-1\">\r\n        <li class=\"list-group-item\"\r\n            [class.active]=\"marcaSelezionata == null\"\r\n            (click)=\"selezionaMarca(null)\">\r\n          Tutte le marche\r\n        </li>\r\n        <li class=\"list-group-item\"\r\n            [class.active]=\"marca == marcaSelezionata\"\r\n            *ngFor=\"let marca of marche\" (click)=\"selezionaMarca(marca)\">\r\n          {{ marca }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-8 col-lg-10\">\r\n      <h2 class=\"text-secondary text-center\">Modelli e caratteristiche</h2>\r\n      <div class=\"row\">\r\n         <div class=\"col\">\r\n            <div class=\"row table-responsive mt-4\">\r\n                <table class=\"table table-hover table-dark\">\r\n                    <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">Nome</th>\r\n                          <th scope=\"col\">OS</th>\r\n                          <th scope=\"col\">HD</th>\r\n                          <th scope=\"col\">RAM</th>\r\n                          <th scope=\"col\">CPU</th>\r\n                          <th scope=\"col\">S/N</th>\r\n                          <th scope=\"col\">Attivo</th>\r\n                          <th scope=\"col\">Note</th>\r\n                          <th scope=\"col\">Dipendente</th>\r\n                          <th scope=\"col\">Modifica</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let com of computer\">\r\n                          <td>{{ com.nome }}</td>\r\n                          <td>{{ com.os }}</td>\r\n                          <td>{{ com.hd }}</td>\r\n                          <td>{{ com.ram }}</td>\r\n                          <td>{{ com.cpu }}</td>\r\n                          <td>{{ com.seriale }}</td>\r\n                          <td>{{ com.attivo }}</td>\r\n                          <td>{{ com.note }}</td>\r\n                          <td>{{ com.dipendente }}</td>\r\n                          <td>\r\n                            <a [routerLink]=\"['/aggiornamento',com.id]\">\r\n                              <i class=\"fa fa-edit fa-3x my-3 mx-3\"></i>\r\n                            </a>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/magazzino/gestione/gestione.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/magazzino/gestione/gestione.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n    <h2 class=\"text-warning text-center my-5\">Form inserimento marche, modelli e caratteristiche</h2>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-9 offset m-5\">\r\n\r\n           <div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['marca'].errors?.required\">\r\n                    La marca del portatile è obbligatoria\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['nome'].errors?.required\">\r\n                    Il nome del portatile è obbligatorio\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['os'].errors?.required\">\r\n                    L'os del portatile è obbligatorio\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['hd'].errors?.required\">\r\n                    L'hd del portatile è obbligatorio\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['ram'].errors?.required\">\r\n                    La ram del portatile è obbligatoria\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['cpu'].errors?.required\">\r\n                    La cpu del portatile è obbligatoria\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"formComputers.controls['seriale'].errors?.required\">\r\n                    Il s/n del portatile è obbligatorio\r\n                </div>\r\n\r\n                <form name=\"formComputers\" [formGroup]=\"formComputers\"\r\n                    class=\"form-group my-5\" (ngSubmit)=\"salvaComputers()\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Marca:</label>\r\n                        <input formControlName=\"marca\" class=\"form-control\">\r\n                    </div>\r\n            \r\n                    <hr>\r\n            \r\n                    <div>\r\n                        <label>Nome:</label>\r\n                        <input formControlName=\"nome\" class=\"form-control\">\r\n                    </div>\r\n            \r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>OS:</label>\r\n                        <input formControlName=\"os\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>HD:</label>\r\n                        <input formControlName=\"hd\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>RAM:</label>\r\n                        <input formControlName=\"ram\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>CPU:</label>\r\n                        <input formControlName=\"cpu\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>S/N:</label>\r\n                        <input formControlName=\"seriale\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>Attivo:</label>\r\n                        <input formControlName=\"attivo\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <hr>\r\n            \r\n                    <div>\r\n                        <label>Note:</label>\r\n                        <textarea formControlName=\"note\" class=\"form-control\"></textarea>\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div>\r\n                        <label>Dipendente:</label>\r\n                        <input formControlName=\"dipendente\" class=\"form-control\">\r\n                    </div>\r\n\r\n                    <button [disabled]=\"formComputers.invalid\"\r\n                    class=\"btn btn-success my-4\">Invia</button>\r\n                    <button class=\"btn btn-secondary mx-1\"\r\n                    type=\"reset\">Svuota</button>\r\n\r\n                </form>  \r\n\r\n           </div> \r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navmenu/navmenu.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navmenu/navmenu.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-md\">  \r\n    <button class=\"navbar-toggler\" (click)=\"toggleNavmenu()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navmenuOpen }\">\r\n      <ul class=\"navbar-nav flex-fill d-flex justify-content-around text-left\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/\">Home page</a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/archivio\">Archivio</a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/gestione\">Gestione</a></li>\r\n      </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'inventario-hardware';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navmenu/navmenu.component */ "./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var _magazzino_archivio_archivio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./magazzino/archivio/archivio.component */ "./src/app/magazzino/archivio/archivio.component.ts");
/* harmony import */ var _magazzino_gestione_gestione_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magazzino/gestione/gestione.component */ "./src/app/magazzino/gestione/gestione.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _magazzino_aggiornamento_archivio_aggiornamento_archivio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./magazzino/aggiornamento-archivio/aggiornamento-archivio.component */ "./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_5__["NavmenuComponent"],
            _magazzino_archivio_archivio_component__WEBPACK_IMPORTED_MODULE_6__["ArchivioComponent"],
            _magazzino_gestione_gestione_component__WEBPACK_IMPORTED_MODULE_7__["GestioneComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _magazzino_aggiornamento_archivio_aggiornamento_archivio_component__WEBPACK_IMPORTED_MODULE_12__["AggiornamentoArchivioComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('notebook-generica.jpg') no-repeat center top; \r\n    position: fixed;\r\n    z-index: -1;\r\n    background-size: cover;\r\n  }\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZEQUFpRTtJQUNqRSxlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImltZy9ub3RlYm9vay1nZW5lcmljYS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hZ2F6emluby9hZ2dpb3JuYW1lbnRvLWFyY2hpdmlvL2FnZ2lvcm5hbWVudG8tYXJjaGl2aW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AggiornamentoArchivioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggiornamentoArchivioComponent", function() { return AggiornamentoArchivioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/computer.service */ "./src/app/services/computer.service.ts");




let AggiornamentoArchivioComponent = class AggiornamentoArchivioComponent {
    constructor(computerService) {
        this.computerService = computerService;
    }
    ngOnInit() {
        this.computerService.loadComputers();
        this.formComputers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            os: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            hd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cpu: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            seriale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            attivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dipendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    aggiornaComputers() {
        this.computerService.updateComputers(this.formComputers.value)
            .subscribe((res) => {
            this.computerService.loadComputers();
            this.formComputers.reset();
        });
    }
};
AggiornamentoArchivioComponent.ctorParameters = () => [
    { type: src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_3__["ComputerService"] }
];
AggiornamentoArchivioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aggiornamento-archivio',
        template: __webpack_require__(/*! raw-loader!./aggiornamento-archivio.component.html */ "./node_modules/raw-loader/index.js!./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.html"),
        styles: [__webpack_require__(/*! ./aggiornamento-archivio.component.css */ "./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.css")]
    })
], AggiornamentoArchivioComponent);



/***/ }),

/***/ "./src/app/magazzino/archivio/archivio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/magazzino/archivio/archivio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hZ2F6emluby9hcmNoaXZpby9hcmNoaXZpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/magazzino/archivio/archivio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/magazzino/archivio/archivio.component.ts ***!
  \**********************************************************/
/*! exports provided: ArchivioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivioComponent", function() { return ArchivioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/computer.service */ "./src/app/services/computer.service.ts");



let ArchivioComponent = class ArchivioComponent {
    constructor(computerService) {
        this.computerService = computerService;
        computerService.loadComputers();
    }
    get computer() {
        return this.computerService
            .getComputer(this.marcaSelezionata);
    }
    get marche() {
        return this.computerService.getMarche();
    }
    selezionaMarca(marca) {
        this.marcaSelezionata = marca;
    }
    ngOnInit() {
    }
};
ArchivioComponent.ctorParameters = () => [
    { type: src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_2__["ComputerService"] }
];
ArchivioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-archivio',
        template: __webpack_require__(/*! raw-loader!./archivio.component.html */ "./node_modules/raw-loader/index.js!./src/app/magazzino/archivio/archivio.component.html"),
        styles: [__webpack_require__(/*! ./archivio.component.css */ "./src/app/magazzino/archivio/archivio.component.css")]
    })
], ArchivioComponent);



/***/ }),

/***/ "./src/app/magazzino/gestione/gestione.component.css":
/*!***********************************************************!*\
  !*** ./src/app/magazzino/gestione/gestione.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hZ2F6emluby9nZXN0aW9uZS9nZXN0aW9uZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/magazzino/gestione/gestione.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/magazzino/gestione/gestione.component.ts ***!
  \**********************************************************/
/*! exports provided: GestioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestioneComponent", function() { return GestioneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/computer.service */ "./src/app/services/computer.service.ts");




let GestioneComponent = class GestioneComponent {
    constructor(computerService) {
        this.computerService = computerService;
    }
    ngOnInit() {
        this.computerService.loadComputers();
        this.formComputers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            os: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            hd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            ram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cpu: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            seriale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            attivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dipendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    salvaComputers() {
        this.computerService.createComputers(this.formComputers.value)
            .subscribe((res) => {
            this.computerService.loadComputers();
            this.formComputers.reset();
        });
    }
};
GestioneComponent.ctorParameters = () => [
    { type: src_app_services_computer_service__WEBPACK_IMPORTED_MODULE_3__["ComputerService"] }
];
GestioneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestione',
        template: __webpack_require__(/*! raw-loader!./gestione.component.html */ "./node_modules/raw-loader/index.js!./src/app/magazzino/gestione/gestione.component.html"),
        styles: [__webpack_require__(/*! ./gestione.component.css */ "./src/app/magazzino/gestione/gestione.component.css")]
    })
], GestioneComponent);



/***/ }),

/***/ "./src/app/model/computer.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/computer.model.ts ***!
  \*****************************************/
/*! exports provided: Computer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Computer", function() { return Computer; });
class Computer {
    constructor(id, marca, nome, os, hd, ram, cpu, seriale, attivo, // boolean
    note, dipendente // Dipendente
    ) {
        this.id = id;
        this.marca = marca;
        this.nome = nome;
        this.os = os;
        this.hd = hd;
        this.ram = ram;
        this.cpu = cpu;
        this.seriale = seriale;
        this.attivo = attivo;
        this.note = note;
        this.dipendente = dipendente;
    }
}
Computer.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/*! exports provided: NavmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavmenuComponent", function() { return NavmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavmenuComponent = class NavmenuComponent {
    constructor() {
        this.navmenuOpen = false;
    }
    toggleNavmenu() {
        this.navmenuOpen = !this.navmenuOpen;
    }
    ngOnInit() {
    }
};
NavmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navmenu',
        template: __webpack_require__(/*! raw-loader!./navmenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/navmenu/navmenu.component.html"),
        styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/navmenu/navmenu.component.css")]
    })
], NavmenuComponent);



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _magazzino_archivio_archivio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../magazzino/archivio/archivio.component */ "./src/app/magazzino/archivio/archivio.component.ts");
/* harmony import */ var _magazzino_gestione_gestione_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../magazzino/gestione/gestione.component */ "./src/app/magazzino/gestione/gestione.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _magazzino_aggiornamento_archivio_aggiornamento_archivio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../magazzino/aggiornamento-archivio/aggiornamento-archivio.component */ "./src/app/magazzino/aggiornamento-archivio/aggiornamento-archivio.component.ts");








let RoutingModule = class RoutingModule {
};
RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                { path: 'archivio', component: _magazzino_archivio_archivio_component__WEBPACK_IMPORTED_MODULE_4__["ArchivioComponent"] },
                { path: 'aggiornamento/:id', component: _magazzino_aggiornamento_archivio_aggiornamento_archivio_component__WEBPACK_IMPORTED_MODULE_7__["AggiornamentoArchivioComponent"] },
                { path: 'gestione', component: _magazzino_gestione_gestione_component__WEBPACK_IMPORTED_MODULE_5__["GestioneComponent"] },
            ])
        ]
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/services/computer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/computer.service.ts ***!
  \**********************************************/
/*! exports provided: ComputerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerService", function() { return ComputerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _model_computer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/computer.model */ "./src/app/model/computer.model.ts");




let ComputerService = class ComputerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._COMPUTERS = [
            new _model_computer_model__WEBPACK_IMPORTED_MODULE_3__["Computer"](1, 'Acer', '5552 series-pew76', 'Win 7 Ultimate', '447 GB SSD', '8 GB DDR3-1600 max 8', 'AMD Athlon II P320 2.10 GHz', 'YTO2203050036152F12701', 'si', '', 'Bianchi Mario'),
            new _model_computer_model__WEBPACK_IMPORTED_MODULE_3__["Computer"](2, 'Lenovo', 'B50-50', 'Win 10 Home', '450 GB no SSD', '4 GB DDR3L-1600 max 8', 'i3 5005U 2 GHz', 'WD02ER01', 'no', 'In attesa di sostituzione HD'),
            new _model_computer_model__WEBPACK_IMPORTED_MODULE_3__["Computer"](3, 'Toshiba', 'SATELLITE C50D-A-12R', 'Win 8.1', '467 GB SATA', '12 GB DDR3L-1600 max 16', 'AMD A-500 1.5 GHz', 'YD0788665', 'no', 'Disco SSD non installabile nonostante la clonazione.'),
            new _model_computer_model__WEBPACK_IMPORTED_MODULE_3__["Computer"](4, 'HP', '15-da0197nl', 'Win 10 Home', '447 GB SSD', '8 GB DDR4-2133 max 16', 'i3 M380 2.53 GHz', 'CPN45224Z5', 'si', '', 'Verdi Giuseppe')
        ];
    }
    loadComputers() {
        const observable = this.httpClient.get('computer'); // ('http://localhost:3000/computers')
        observable.subscribe((response) => {
            this._COMPUTERS = response;
            // this.computer_id = params ['id'];
        }, (error) => { console.log(error); });
    }
    getComputer(marca) {
        if (marca) {
            return this._COMPUTERS.filter(com => com.marca === marca);
        }
        else {
            return this._COMPUTERS;
        }
    }
    getMarche() {
        return this._COMPUTERS
            .map((com) => com.marca)
            .filter((marca, index, array) => array.indexOf(marca) === index)
            .sort();
    }
    createComputers(computers) {
        return this.httpClient.post('http://localhost:3000/computers', computers);
    }
    updateComputers(computers) {
        return this.httpClient.put('http://localhost:3000/computers', computers);
    }
};
ComputerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComputerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComputerService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Backup\Multimedia\Doc personali preferiti\Corso_Full_Stack_Developer\Angular\inventariohardwareDeploy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
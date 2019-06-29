(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/*!*******************************************************!*\
  !*** ../$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************/
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/app.component.html":
/*!****************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/app.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>{{ title }}</h1>\n<app-ingredients></app-ingredients>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/hero-detail/hero-detail.component.html":
/*!************************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/hero-detail/hero-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedHero\">\n \n  <h2>{{selectedHero.name | uppercase}} Details</h2>\n  <div><span>id: </span>{{selectedHero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n \n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/heroes/heroes.component.html":
/*!**************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/heroes/heroes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\"\n    [class.selected]=\"hero === selectedHero\"\n    (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n<app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/ingredient-detail/ingredient-detail.component.html":
/*!************************************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/ingredient-detail/ingredient-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ingredient-detail works!</p>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!../src/app/ingredients/ingredients.component.html":
/*!************************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/app/ingredients/ingredients.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"rela\">\n \t<div>\n \t<button mat-raised-button *ngIf=\"sandwich.length\" (click)=\"onSelect(sandwich)\">ORDER MY SAMMICH!</button>\n </div>\n \t<div class=\"ingredient-container\">\n  <h2>Available Ingredients</h2>\n\n  <div\n    cdkDropList\n    #ingredientsList=\"cdkDropList\"\n    [cdkDropListData]=\"ingredients\"\n    [cdkDropListConnectedTo]=\"[sandwichList]\"\n    class=\"ingredient-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"ingredient-box\" *ngFor=\"let ingredient of ingredients\" cdkDrag>{{ingredient.name}}</div>\n  </div>\n</div>\n\n<div class=\"ingredient-container\">\n  <h2>My Sammich</h2>\n<div class=\"bread\"></div>\n  <div\n    cdkDropList\n    #sandwichList=\"cdkDropList\"\n    [cdkDropListData]=\"sandwich\"\n    [cdkDropListConnectedTo]=\"[ingredientsList]\"\n    class=\"ingredient-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    >\n    <div class=\"ingredient-box\" *ngFor=\"let ingredient of sandwich\" cdkDrag>{{ingredient.name}}</div>\n  </div>\n  <div class=\"bread-bottom\"></div>\n</div>\n</div>\n<!-- All lists in here will be connected. -\n  <div cdkDropList *ngFor=\"let list of lists\"></div>\n</div>-->"

/***/ }),

/***/ "../src/app/app-routing.module.ts":
/*!****************************************!*\
  !*** ../src/app/app-routing.module.ts ***!
  \****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../src/app/app.component.scss":
/*!*************************************!*\
  !*** ../src/app/app.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[type=text], button {\n  color: #333;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.main {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zYW5kYm94L2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QUNDRjtBRENBO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7QUNFRjtBREFBO0VBQ0UsV0FBQTtBQ0dGO0FEREE7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7QUNJRjtBREZBLG9CQUFBO0FBQ0E7RUFDRSx5Q0FBQTtBQ0tGO0FESEE7RUFDRSxrQkFBQTtBQ01GIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xuaDEge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbn1cbmgyLCBoMyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAyZW07XG59XG5ib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuLyogZXZlcnl3aGVyZSBlbHNlICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4ubWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xuaDEge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbn1cblxuaDIsIGgzIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5ib2R5LCBpbnB1dFt0eXBlPXRleHRdLCBidXR0b24ge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5cbi8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Make a Sammich';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "../src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heroes/heroes.component */ "../src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ingredients/ingredients.component */ "../src/app/ingredients/ingredients.component.ts");
/* harmony import */ var _ingredient_detail_ingredient_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ingredient-detail/ingredient-detail.component */ "../src/app/ingredient-detail/ingredient-detail.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["HeroesComponent"],
                _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__["HeroDetailComponent"],
                _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_9__["IngredientsComponent"],
                _ingredient_detail_ingredient_detail_component__WEBPACK_IMPORTED_MODULE_10__["IngredientDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/app/hero-detail/hero-detail.component.scss":
/*!*********************************************************!*\
  !*** ../src/app/hero-detail/hero-detail.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../src/app/hero-detail/hero-detail.component.ts":
/*!*******************************************************!*\
  !*** ../src/app/hero-detail/hero-detail.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! raw-loader!./hero-detail.component.html */ "../node_modules/raw-loader/index.js!../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.scss */ "../src/app/hero-detail/hero-detail.component.scss")]
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../src/app/heroes/heroes.component.scss":
/*!***********************************************!*\
  !*** ../src/app/heroes/heroes.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: 0.1em;\n}\n\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zYW5kYm94L2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnNjc3MiLCJhcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREhDO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ1FGIiwiZmlsZSI6ImFwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVyb2VzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG59XG4uaGVyb2VzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaGVyb2VzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Lmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLmhlcm9lcyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0iLCIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVyb2VzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyb2VzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IDAuMWVtO1xufVxuXG4uaGVyb2VzIC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbi5oZXJvZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDUwNjE7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0iXX0= */"

/***/ }),

/***/ "../src/app/heroes/heroes.component.ts":
/*!*********************************************!*\
  !*** ../src/app/heroes/heroes.component.ts ***!
  \*********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-heroes */ "../src/app/mock-heroes.ts");



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_2__["HEROES"];
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! raw-loader!./heroes.component.html */ "../node_modules/raw-loader/index.js!../src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.scss */ "../src/app/heroes/heroes.component.scss")]
        })
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../src/app/ingredient-detail/ingredient-detail.component.scss":
/*!*********************************************************************!*\
  !*** ../src/app/ingredient-detail/ingredient-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaW5ncmVkaWVudC1kZXRhaWwvaW5ncmVkaWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../src/app/ingredient-detail/ingredient-detail.component.ts":
/*!*******************************************************************!*\
  !*** ../src/app/ingredient-detail/ingredient-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: IngredientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDetailComponent", function() { return IngredientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var IngredientDetailComponent = /** @class */ (function () {
    function IngredientDetailComponent() {
    }
    IngredientDetailComponent.prototype.ngOnInit = function () {
    };
    IngredientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredient-detail',
            template: __webpack_require__(/*! raw-loader!./ingredient-detail.component.html */ "../node_modules/raw-loader/index.js!../src/app/ingredient-detail/ingredient-detail.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-detail.component.scss */ "../src/app/ingredient-detail/ingredient-detail.component.scss")]
        })
    ], IngredientDetailComponent);
    return IngredientDetailComponent;
}());



/***/ }),

/***/ "../src/app/ingredient-list.ts":
/*!*************************************!*\
  !*** ../src/app/ingredient-list.ts ***!
  \*************************************/
/*! exports provided: INGREDIENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENTS", function() { return INGREDIENTS; });
var INGREDIENTS = [
    { id: 11, name: 'Ham', image: 'path/to/img' },
    { id: 12, name: 'Roast Beef', image: 'path/to/img' },
    { id: 13, name: 'Turkey', image: 'path/to/img' },
    { id: 14, name: 'Chicken', image: 'path/to/img' },
    { id: 15, name: 'Cheese', image: 'path/to/img' },
    { id: 16, name: 'Lettuce', image: 'path/to/img' },
    { id: 17, name: 'Peppers', image: 'path/to/img' },
    { id: 18, name: 'Tomato', image: 'path/to/img' },
    { id: 19, name: 'Pickels', image: 'path/to/img' },
    { id: 20, name: 'Mayonnaise', image: 'path/to/img' },
    { id: 21, name: 'Mustard', image: 'path/to/img' }
];


/***/ }),

/***/ "../src/app/ingredients/ingredients.component.scss":
/*!*********************************************************!*\
  !*** ../src/app/ingredients/ingredients.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ingredient-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.ingredient-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.ingredient-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.ingredient-box:last-child {\n  border: none;\n}\n\n.ingredient-list.cdk-drop-list-dragging .ingredient-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.rela {\n  position: relative;\n}\n\n.bread {\n  background-image: url(\"/assets/img/slice-of-bread.png\");\n  height: 160px;\n  width: 400px;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position-y: 30px;\n}\n\n.bread-bottom {\n  background-image: url(\"/assets/img/slice-of-bread.png\");\n  height: 200px;\n  width: 400px;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zYW5kYm94L2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzLmNvbXBvbmVudC5zY3NzIiwiYXBwL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNDRjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSwwR0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsdURBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UsdURBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNFRiIsImZpbGUiOiJhcHAvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5ncmVkaWVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbmdyZWRpZW50LWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmluZ3JlZGllbnQtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaW5ncmVkaWVudC1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmluZ3JlZGllbnQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pbmdyZWRpZW50LWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5yZWxhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJyZWFkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zbGljZS1vZi1icmVhZC5wbmcnKTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMzBweDtcbn1cbi5icmVhZC1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NsaWNlLW9mLWJyZWFkLnBuZycpO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iLCIuaW5ncmVkaWVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbmdyZWRpZW50LWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmluZ3JlZGllbnQtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaW5ncmVkaWVudC1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmluZ3JlZGllbnQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pbmdyZWRpZW50LWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLnJlbGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5icmVhZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3NsaWNlLW9mLWJyZWFkLnBuZ1wiKTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMzBweDtcbn1cblxuLmJyZWFkLWJvdHRvbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3NsaWNlLW9mLWJyZWFkLnBuZ1wiKTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "../src/app/ingredients/ingredients.component.ts":
/*!*******************************************************!*\
  !*** ../src/app/ingredients/ingredients.component.ts ***!
  \*******************************************************/
/*! exports provided: IngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function() { return IngredientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ingredient_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingredient-list */ "../src/app/ingredient-list.ts");
/* harmony import */ var _sandwich__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sandwich */ "../src/app/sandwich.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../node_modules/@angular/cdk/esm5/drag-drop.es5.js");





var IngredientsComponent = /** @class */ (function () {
    //onSelect(sandwich: SANDWICH): void {
    //this.selectedSandwich = sandwich;
    //}
    function IngredientsComponent() {
        this.ingredients = _ingredient_list__WEBPACK_IMPORTED_MODULE_2__["INGREDIENTS"];
        this.sandwich = _sandwich__WEBPACK_IMPORTED_MODULE_3__["SANDWICH"];
    }
    IngredientsComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    IngredientsComponent.prototype.ngOnInit = function () {
    };
    IngredientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredients',
            template: __webpack_require__(/*! raw-loader!./ingredients.component.html */ "../node_modules/raw-loader/index.js!../src/app/ingredients/ingredients.component.html"),
            styles: [__webpack_require__(/*! ./ingredients.component.scss */ "../src/app/ingredients/ingredients.component.scss")]
        })
    ], IngredientsComponent);
    return IngredientsComponent;
}());



/***/ }),

/***/ "../src/app/mock-heroes.ts":
/*!*********************************!*\
  !*** ../src/app/mock-heroes.ts ***!
  \*********************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "../src/app/sandwich.ts":
/*!******************************!*\
  !*** ../src/app/sandwich.ts ***!
  \******************************/
/*! exports provided: SANDWICH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANDWICH", function() { return SANDWICH; });
var SANDWICH = [];


/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /sandbox/angular/angular-tour-of-heroes/src/main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
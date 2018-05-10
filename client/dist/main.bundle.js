webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> {{ title }} </h1>\n\n<!-- router will determine what goes here  -->\n<router-outlet></router-outlet>  \n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { CamperService } from './camper.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Bunkmate Matcher';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__campers_campers_component__ = __webpack_require__("./src/app/campers/campers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__camper_list_camper_list_component__ = __webpack_require__("./src/app/camper-list/camper-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__camper_detail_camper_detail_component__ = __webpack_require__("./src/app/camper-detail/camper-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_camper_new_camper_component__ = __webpack_require__("./src/app/new-camper/new-camper.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//imports Angular functionality needed





//imports our own custom components





//sets up routes to access various components
var routes = [
    { path: '', redirectTo: '/campers', pathMatch: 'full' },
    { path: 'campers', component: __WEBPACK_IMPORTED_MODULE_7__camper_list_camper_list_component__["a" /* CamperListComponent */] },
    { path: 'camper/:id', component: __WEBPACK_IMPORTED_MODULE_8__camper_detail_camper_detail_component__["a" /* CamperDetailComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_9__new_camper_new_camper_component__["a" /* NewCamperComponent */] }
];
var AppModule = /** @class */ (function () {
    //export module
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__campers_campers_component__["a" /* CampersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__camper_list_camper_list_component__["a" /* CamperListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__camper_detail_camper_detail_component__["a" /* CamperDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_camper_new_camper_component__["a" /* NewCamperComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
        //export module
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/camper-detail/camper-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/camper-detail/camper-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"camper\">\n<!-- \tthis section displays if not in editing mode -->\n\t<div *ngIf=\"!editing\" class='box'>\n\t\t<h2>Camper Details</h2>\n\t\t<li class={{camper.classes}}>\n\t\t  \t<strong>{{camper.firstName}} {{camper.lastName}}</strong>\n\t\t  \t<br>\n\t\t  \t<span>Gender: {{camper.gender}}</span>\n\t\t  \t<br>\n\t\t  \t<span>Snoring: {{camper.snoring}}</span>\n\t\t  \t<br>\n\t\t  \t<span>Sleeping: {{camper.sleepHeaviness}}</span>\n\t\t  \t<br>\n\t\t  \t<span>Bunkmate Preference: {{camper.bunkmateGender}}</span>\n\t\t  \t<br>\n\t\t  \t<span>Acceptable Room: {{camper.acceptableRoom}}</span>\n\t\t    <br>\n\t\t</li>\n\t\t<br>\n\t\t<button (click)=\"setEditMode(true)\">Edit</button>\n\t\t<button (click)=\"deleteCamper()\">Delete</button>\n\t\t<button (click)=\"goBack()\">Back to List</button>\n\t</div> \n\n\t<!-- this section displays when in editing mode -->\n\t<div *ngIf=\"editing\" class='box'>\n<!-- \t\tone-way binding form so underlying data doesn't change until we hit save -->\n\t\t<form #form=\"ngForm\" (ngSubmit)=\"updateCamper(form.value)\">\n\t\t\t<label for=\"firstName\">\n\t\t\t\t<strong>First Name:</strong>\n\t\t\t\t<input id=\"firstName\" type=\"text\" name=\"firstName\" value=\"\" size=\"50\" required=\"required\" [ngModel]=\"camper.firstName\"/>\n\t\t\t</label>\n\t\t\t<br/>\n\t\t\t<label for=\"lastName\">\n\t\t\t\t<strong>Last Name:</strong>\n\t\t\t\t<input id=\"lastName\" type=\"text\" name=\"lastName\" value=\"\" size=\"50\" required=\"required\" [ngModel]=\"camper.lastName\"/>\n\t\t\t</label>\n\t\t\t<br/>\n\t\t\t<strong>Gender: </strong>\n\t\t\t<br/>\n\t\t\t<input id=\"male\" type=\"radio\" [ngModel]=\"camper.gender\" name=\"gender\" value=\"Male\" required=\"required\"/>\n\t\t\t<label for=\"male\">Male</label>\n\t\t\t<input id=\"female\" type=\"radio\" [ngModel]=\"camper.gender\" name=\"gender\" value=\"Female\" required=\"required\" />\n\t\t\t<label for=\"female\">Female</label>\n\t\t\t<input id=\"non-binary\" type=\"radio\" [ngModel]=\"camper.gender\" name=\"gender\" value=\"Non-Binary\" required=\"required\"/>\n\t\t\t<label for=\"non-binary\">Non-Binary</label>\n\t\t\t<br/>\n\t\t\t<strong>How much do you snore? </strong>\n\t\t\t<br/>\n\t\t\t<input id=\"none\" type=\"radio\" [ngModel]=\"camper.snoring\" name=\"snoring\" value=\"None\" required=\"required\"/>\n\t\t\t<label for=\"none\">Not at all</label>\n\t\t\t<input id=\"quiet\" type=\"radio\" [ngModel]=\"camper.snoring\" name=\"snoring\" value=\"Quiet\" required=\"required\" />\n\t\t\t<label for=\"quiet\">Lightly / Quietly</label>\n\t\t\t<input id=\"loud\" type=\"radio\" [ngModel]=\"camper.snoring\" name=\"snoring\" value=\"Loud\" required=\"required\"/>\n\t\t\t<label for=\"loud\">Heavily / Loudly</label>\n\t\t\t<br/>\n\t\t\t<strong>How soundly do you sleep? </strong>\n\t\t\t<br/>\n\t\t\t<input id=\"light\" type=\"radio\" [ngModel]=\"camper.sleepHeaviness\" name=\"sleepHeaviness\" value=\"Light\" required=\"required\"/>\n\t\t\t<label for=\"light\">Light sleeper</label>\n\t\t\t<input id=\"medium\" type=\"radio\" [ngModel]=\"camper.sleepHeaviness\" name=\"sleepHeaviness\" value=\"Medium\" required=\"required\"/>\n\t\t\t<label for=\"medium\">Medium sleeper</label>\n\t\t\t<input id=\"heavy-sleeper\" type=\"radio\" [ngModel]=\"camper.sleepHeaviness\" name=\"sleepHeaviness\" value=\"Heavy\" required=\"required\"/>\n\t\t\t<label for=\"heavy\">Heavy sleeper</label>\n\t\t\t<br/>\n\t\t\t<strong>What gender would you prefer your bunkmate(s) be?</strong>\n\t\t\t<br/>\n\t\t\t<input class=\"maleRoom\" id=\"maleRoom\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"bunkmateGender\" value=\"Male\" required=\"required\"/>\n\t\t\t<label class=\"maleRoom\" for=\"maleRoom\">Male</label>\n\t\t\t<input class=\"femaleRoom\" id=\"femaleRoom\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"bunkmateGender\" value=\"Female\" required=\"required\" />\n\t\t\t<label class=\"femaleRoom\" for=\"femaleRoom\">Female</label>\n\t\t\t<input id=\"no-preference\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"bunkmateGender\" value=\"No Preference\" required=\"required\"/>\n\t\t\t<label for=\"no-preference\">No Preference</label><br/>\n\t\t\t<br/>\n\t\t\t<button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n\t\t\t<button (click)=\"setEditMode(false)\">Cancel</button>\n\t\t\t<br/>\n\t\t</form>\n\t</div> \n</div>\n"

/***/ }),

/***/ "./src/app/camper-detail/camper-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamperDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camper_service__ = __webpack_require__("./src/app/camper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//imports needed angular functionality


//imports custom camper service

var CamperDetailComponent = /** @class */ (function () {
    function CamperDetailComponent(route, camperService, router) {
        this.route = route;
        this.camperService = camperService;
        this.router = router;
        this.editing = false;
    }
    CamperDetailComponent.prototype.ngOnInit = function () {
        this.camper = this.getCamper();
    };
    //changes status of editing boolean according to what's passed in
    CamperDetailComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    //uses the camper ID found in the URL to get camper record from camper service
    CamperDetailComponent.prototype.getCamper = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.camperService.getCamper(param)
            .subscribe(function (camper) {
            _this.camper = camper;
        });
    };
    //when submit is clicked, save form entries as object data
    CamperDetailComponent.prototype.updateCamper = function (form) {
        var _this = this;
        this.camper.firstName = form.firstName;
        this.camper.lastName = form.lastName;
        this.camper.gender = form.gender;
        this.camper.snoring = form.snoring;
        this.camper.sleepHeaviness = form.sleepHeaviness;
        this.camper.bunkmateGender = form.bunkmateGender;
        //passes id and data to camper service to pass to API
        this.camperService.updateCamper(this.camper._id, this.camper)
            .subscribe(function (result) {
            _this.router.navigate(['/campers']);
        });
    };
    //after confirmation, deletes camper record and redirects to camper list
    CamperDetailComponent.prototype.deleteCamper = function () {
        var _this = this;
        if (confirm("Do you really want to delete this camper record?")) {
            this.camperService.deleteCamper(this.camper._id)
                .subscribe(function (camper) {
                _this.router.navigate(['/campers']);
            });
        }
    };
    CamperDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/campers']);
    };
    CamperDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-camper-detail',
            template: __webpack_require__("./src/app/camper-detail/camper-detail.component.html"),
            styles: [__webpack_require__("./src/app/camper-detail/camper-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CamperDetailComponent);
    return CamperDetailComponent;
}());



/***/ }),

/***/ "./src/app/camper-list/camper-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/camper-list/camper-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--   <app-new-camper>\n    refreshes camper list when new camper event received\n   (newCamperEvent)=\"refreshCamperList()\">\n  </app-new-camper> -->\n\n\n<!-- loops through camper records and prints to page, sorted by type of cabin needed -->\n\n<div class='box'>\n  <h2>Current Campers ({{campers.length}})</h2>\n\n  <button *ngIf=\"!breakdown\" (click)=\"showBreakdown(true)\">Show Camper Breakdown</button>\n  <button *ngIf=\"breakdown\" (click)=\"showBreakdown(false)\">Hide Camper Breakdown</button>\n  <button (click)=\"newCamper()\">Add New Camper</button>\n\n  <div *ngIf=\"breakdown\" class='box'>\n    <h3>Camper Breakdown</h3>\n    <p><strong>Total Campers: {{campers.length}}</strong></p>\n    <p><strong>Counts by Gender:</strong></p>\n    <ul class='key'>\n      <li class='female'>Female Camper ({{femaleCampers.length}})</li>\n      <li class='nonbinary'>Non-Binary Camper ({{nonbinaryCampers.length}})</li>\n      <li class='male'>Male Camper ({{maleCampers.length}})</li>\n    </ul>\n    <p><strong>Counts by Cabin Preference:</strong></p>\n    <ul class='key'>\n      <li class='femaleCabin female'>Female Cabin ({{femaleCabin.length}})</li>\n      <li class='coedCabin female'>Co-Ed or Female Cabin ({{coedFemaleCabin.length}})</li>\n      <li class='coedCabin nonbinary'>Coed Cabin ({{coedCabin.length}})</li>\n      <li class='coedCabin male'>Co-Ed or Male Cabin ({{coedMaleCabin.length}})</li>\n      <li class='maleCabin male'>Male Cabin ({{maleCabin.length}})</li>\n    </ul>\n  </div>\n\n  <ul>\n    <app-campers *ngFor=\"let thisCamper of femaleCabin\"\n      [camper] = \"thisCamper\">\n    </app-campers>\n\n    <app-campers *ngFor=\"let thisCamper of coedFemaleCabin\"\n      [camper] = \"thisCamper\">\n    </app-campers>\n\n    <app-campers *ngFor=\"let thisCamper of coedCabin\"\n      [camper] = \"thisCamper\">\n    </app-campers>\n\n    <app-campers *ngFor=\"let thisCamper of coedMaleCabin\"\n      [camper] = \"thisCamper\">\n    </app-campers>\n\n    <app-campers *ngFor=\"let thisCamper of maleCabin\"\n      [camper] = \"thisCamper\">\n    </app-campers>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/camper-list/camper-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamperListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camper_service__ = __webpack_require__("./src/app/camper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// imports camper service 

var CamperListComponent = /** @class */ (function () {
    function CamperListComponent(camperService, route, router) {
        this.camperService = camperService;
        this.route = route;
        this.router = router;
        this.campers = [];
        this.maleCampers = [];
        this.femaleCampers = [];
        this.nonbinaryCampers = [];
        this.maleCabin = [];
        this.femaleCabin = [];
        this.coedCabin = [];
        this.coedMaleCabin = [];
        this.coedFemaleCabin = [];
        this.breakdown = false;
    }
    CamperListComponent.prototype.ngOnInit = function () {
        this.refreshCamperList();
    };
    //changes visibility of create form 
    CamperListComponent.prototype.showBreakdown = function (mode) {
        this.breakdown = (mode ? true : false);
    };
    //navigates to new camper form
    CamperListComponent.prototype.newCamper = function () {
        this.router.navigate(['/new']);
    };
    //updates camper list (called on each page load)
    CamperListComponent.prototype.refreshCamperList = function () {
        var _this = this;
        //capture the camper list from the service
        this.camperService.listCampers()
            .subscribe(function (campers) {
            _this.campers = campers;
            //clear out the filtered lists
            _this.maleCampers = [];
            _this.femaleCampers = [];
            _this.nonbinaryCampers = [];
            _this.maleCabin = [];
            _this.femaleCabin = [];
            _this.coedCabin = [];
            _this.coedMaleCabin = [];
            _this.coedFemaleCabin = [];
            //loop through camper list, pushing to filtered lists as appropriate
            _this.campers.forEach(function (camper) {
                if (camper.gender == 'Male') {
                    _this.maleCampers.push(camper);
                }
                if (camper.gender == 'Female') {
                    _this.femaleCampers.push(camper);
                }
                if (camper.gender == 'Non-Binary') {
                    _this.nonbinaryCampers.push(camper);
                }
                if (camper.acceptableRoom == 'Female') {
                    _this.femaleCabin.push(camper);
                }
                if (camper.acceptableRoom == 'Male') {
                    _this.maleCabin.push(camper);
                }
                if (camper.acceptableRoom == 'Co-Ed') {
                    _this.coedCabin.push(camper);
                }
                if (camper.acceptableRoom == 'Co-Ed or Female') {
                    _this.coedFemaleCabin.push(camper);
                }
                if (camper.acceptableRoom == 'Co-Ed or Male') {
                    _this.coedMaleCabin.push(camper);
                }
            });
        });
    };
    CamperListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-camper-list',
            template: __webpack_require__("./src/app/camper-list/camper-list.component.html"),
            styles: [__webpack_require__("./src/app/camper-list/camper-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CamperListComponent);
    return CamperListComponent;
}());



/***/ }),

/***/ "./src/app/camper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//imports Angular functionality needed



var CamperService = /** @class */ (function () {
    function CamperService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    CamperService.prototype.listCampers = function () {
        return this.http.get(this.apiUrl + '/');
    };
    CamperService.prototype.getCamper = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    CamperService.prototype.updateCamper = function (id, data) {
        return this.http.put(this.apiUrl + '/update/' + id, data);
    };
    CamperService.prototype.createCamper = function (data) {
        return this.http.post(this.apiUrl + '/create', data, { headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    CamperService.prototype.deleteCamper = function (id) {
        return this.http.delete(this.apiUrl + '/delete/' + id);
    };
    CamperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CamperService);
    return CamperService;
}());

// //prints a list of campers
// router.get('/', api.list);
// //creates a single camper
// router.post('/create', api.create);
// //displays a single camper in edit mode
// router.get('/:camperid', api.read);
// //updates a single camper
// router.put('/update/:camperid', api.update);
// //deletes a single camper
// router.delete('/delete/:camperid', api.delete);


/***/ }),

/***/ "./src/app/campers/campers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campers/campers.component.html":
/***/ (function(module, exports) {

module.exports = "<li class={{camper.classes}}>\n  \t<strong>{{camper.firstName}} {{camper.lastName}}</strong>\n  \t<br>\n  \t<span>Gender: {{camper.gender}}</span>\n  \t<br>\n  \t<span>Snoring: {{camper.snoring}}</span>\n  \t<br>\n  \t<span>Sleeping: {{camper.sleepHeaviness}}</span>\n  \t<br>\n  \t<span>Bunkmate Preference: {{camper.bunkmateGender}}</span>\n  \t<br>\n  \t<span>Acceptable Room: {{camper.acceptableRoom}}</span>\n    <br>\n    <a routerLink=\"/camper/{{camper._id}}\">Edit this camper</a>\n</li>\n\n"

/***/ }),

/***/ "./src/app/campers/campers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampersComponent = /** @class */ (function () {
    function CampersComponent() {
    }
    CampersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CampersComponent.prototype, "camper", void 0);
    CampersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-campers',
            template: __webpack_require__("./src/app/campers/campers.component.html"),
            styles: [__webpack_require__("./src/app/campers/campers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampersComponent);
    return CampersComponent;
}());



/***/ }),

/***/ "./src/app/new-camper/new-camper.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-camper/new-camper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='box'>\n\t<h2>Add a New Camper</h2>\n\n\t<form #newCamperForm=\"ngForm\" (ngSubmit)=\"save(newCamperForm)\">\n\t\t<label for=\"firstName\">\n\t\t\t<strong>First Name:</strong>\n\t\t\t<input id=\"firstName\" type=\"text\" name=\"firstName\" value=\"\" size=\"50\" required=\"required\" [(ngModel)]=\"camper.firstName\"/>\n\t\t</label>\n\t\t<br/>\n\t\t<label for=\"lastName\">\n\t\t\t<strong>Last Name:</strong>\n\t\t\t<input id=\"lastName\" type=\"text\" name=\"lastName\" value=\"\" size=\"50\" required=\"required\" [(ngModel)]=\"camper.lastName\"/>\n\t\t</label>\n\t\t<br/>\n\t\t<strong>Gender: </strong>\n\t\t<br/>\n\t\t<input id=\"male\" type=\"radio\" [(ngModel)]=\"camper.gender\" name=\"camper.gender\" value=\"Male\" required=\"required\"/>\n\t\t<label for=\"male\">Male</label>\n\t\t<input id=\"female\" type=\"radio\" [(ngModel)]=\"camper.gender\" name=\"camper.gender\" value=\"Female\" required=\"required\" />\n\t\t<label for=\"female\">Female</label>\n\t\t<input id=\"non-binary\" type=\"radio\" [(ngModel)]=\"camper.gender\" name=\"camper.gender\" value=\"Non-Binary\" required=\"required\"/>\n\t\t<label for=\"non-binary\">Non-Binary</label>\n\t\t<br/>\n\t\t<strong>How much do you snore? </strong>\n\t\t<br/>\n\t\t<input id=\"none\" type=\"radio\" [(ngModel)]=\"camper.snoring\" name=\"camper.snoring\" value=\"None\" required=\"required\"/>\n\t\t<label for=\"none\">Not at all</label>\n\t\t<input id=\"quiet\" type=\"radio\" [(ngModel)]=\"camper.snoring\" name=\"camper.snoring\" value=\"Quiet\" required=\"required\" />\n\t\t<label for=\"quiet\">Lightly / Quietly</label>\n\t\t<input id=\"loud\" type=\"radio\" [(ngModel)]=\"camper.snoring\" name=\"camper.snoring\" value=\"Loud\" required=\"required\"/>\n\t\t<label for=\"loud\">Heavily / Loudly</label>\n\t\t<br/>\n\t\t<strong>How soundly do you sleep? </strong>\n\t\t<br/>\n\t\t<input id=\"light\" type=\"radio\" [(ngModel)]=\"camper.sleepHeaviness\" name=\"camper.sleepHeaviness\" value=\"Light\" required=\"required\"/>\n\t\t<label for=\"light\">Light sleeper</label>\n\t\t<input id=\"medium\" type=\"radio\" [(ngModel)]=\"camper.sleepHeaviness\" name=\"camper.sleepHeaviness\" value=\"Medium\" required=\"required\"/>\n\t\t<label for=\"medium\">Medium sleeper</label>\n\t\t<input id=\"heavy-sleeper\" type=\"radio\" [(ngModel)]=\"camper.sleepHeaviness\" name=\"camper.sleepHeaviness\" value=\"Heavy\" required=\"required\"/>\n\t\t<label for=\"heavy\">Heavy sleeper</label>\n\t\t<br/>\n\t\t<strong>What gender would you prefer your bunkmate(s) be?</strong>\n\t\t<br/>\n\t\t<input class=\"maleRoom\" id=\"maleRoom\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"camper.bunkmateGender\" value=\"Male\" required=\"required\"/>\n\t\t<label class=\"maleRoom\" for=\"maleRoom\">Male</label>\n\t\t<input class=\"femaleRoom\" id=\"femaleRoom\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"camper.bunkmateGender\" value=\"Female\" required=\"required\" />\n\t\t<label class=\"femaleRoom\" for=\"femaleRoom\">Female</label>\n\t\t<input id=\"no-preference\" type=\"radio\" [(ngModel)]=\"camper.bunkmateGender\" name=\"camper.bunkmateGender\" value=\"No Preference\" required=\"required\"/>\n\t\t<label for=\"no-preference\">No Preference</label><br/>\n\t\t<br/>\n\t\t<button type=\"submit\" [disabled]=\"!newCamperForm.valid\">Create New Camper Record</button>\n\t\t<button (click)=\"clearAndHide(newCamperForm)\">Cancel</button>\n\t\t<br/>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-camper/new-camper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCamperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camper_service__ = __webpack_require__("./src/app/camper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCamperComponent = /** @class */ (function () {
    function NewCamperComponent(route, camperService, router) {
        this.route = route;
        this.camperService = camperService;
        this.router = router;
        this.newCamperEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.camper = {};
    }
    NewCamperComponent.prototype.ngOnInit = function () {
    };
    //saves record to DB using camper service 
    //clears form and returns to camper list 
    NewCamperComponent.prototype.save = function (newCamperForm) {
        var _this = this;
        this.camperService.createCamper(this.camper)
            .subscribe(function (camper) {
            console.log(camper);
            _this.newCamperEvent.emit();
            newCamperForm.reset();
            _this.router.navigate(['/campers']);
        });
    };
    //clears form and returns to camper list
    NewCamperComponent.prototype.clearAndHide = function (newCamperForm) {
        newCamperForm.reset();
        this.router.navigate(['/campers']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewCamperComponent.prototype, "newCamperEvent", void 0);
    NewCamperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-camper',
            template: __webpack_require__("./src/app/new-camper/new-camper.component.html"),
            styles: [__webpack_require__("./src/app/new-camper/new-camper.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__camper_service__["a" /* CamperService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NewCamperComponent);
    return NewCamperComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '/api/bunkmates'
};
// http://159.65.38.165:8080/api/bunkmates


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__auth_auth_component__["a" /* AuthComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-loader></app-loader>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_trade_service__ = __webpack_require__("../../../../../src/app/services/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loader_loader_module__ = __webpack_require__("../../../../../src/app/loader/loader.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: 'AIzaSyDHGtwlww4PJVqSgr7onPEJHHCGwVWydII',
    authDomain: 'trading-95678.firebaseapp.com',
    databaseURL: '//trading-95678.firebaseio.com',
    projectId: 'trading-95678',
    storageBucket: 'trading-95678.appspot.com',
    messagingSenderId: '64909653421'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_14__loader_loader_module__["a" /* LoaderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["b" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_trade_service__["c" /* TradeService */],
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\r\n  <mat-card class=\"auth-dialog\">\r\n    <mat-card-title class=\"auth-dialog__title\">\r\n      <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row>\r\n          <span>Login</span>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <form class=\"auth-form\" [formGroup]=\"loginForm\" (submit)=\"login()\">\r\n        <mat-form-field class=\"auth-form__full-width\">\r\n          <input matInput placeholder=\"Email\" [formControlName]=\"'email'\">\r\n          <mat-hint>Errors appear instantly!</mat-hint>\r\n\r\n          <mat-error *ngIf=\"loginForm.get('email').hasError('email') && !loginForm.get('email').hasError('required')\">\r\n            Please enter a valid email address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n\r\n        </mat-form-field>\r\n\r\n        <br>\r\n        <br>\r\n        <mat-form-field class=\"auth-form__full-width\">\r\n          <input type=\"password\" matInput placeholder=\"Password\" [formControlName]=\"'pass'\">\r\n          <mat-hint>Errors appear instantly!</mat-hint>\r\n\r\n          <mat-error *ngIf=\"loginForm.get('pass').hasError('required')\">\r\n            Password is <strong>required</strong>\r\n          </mat-error>\r\n\r\n        </mat-form-field>\r\n        <br><br><br>\r\n        <mat-card-footer>\r\n          <mat-card-actions class=\"auth-form__footer\">\r\n            <button mat-raised-button color=\"primary\">Login</button>\r\n          </mat-card-actions>\r\n        </mat-card-footer>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  position: relative; }\n\n.auth {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  background: #eeeeee;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .auth-dialog {\n    max-width: 420px;\n    width: 100%; }\n    .auth-dialog__title {\n      margin: 0 -24px;\n      margin-top: -24px !important; }\n  .auth-form {\n    padding-top: 20px;\n    width: 100%; }\n    .auth-form__full-width {\n      width: 100%; }\n    .auth-form__footer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .auth-form__footer button {\n        padding: 4px 60px;\n        border-radius: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("../../../../../src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = (function () {
    function AuthComponent(auth, fb, router, loader) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.loader = loader;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            pass: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.invalid)
            return;
        this.loader.show();
        this.auth.login(this.loginForm.value).subscribe(function (val) { return _this.router.navigate(['home']); }).add(function () { return _this.loader.hide(); });
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next) {
        // TODO: По прямой внутренней ссылке редиректит только на пустую страницу но не на логин
        return this.auth.logined();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(fireAuth) {
        this.fireAuth = fireAuth;
        this.user = this.fireAuth.authState;
    }
    AuthService.prototype.login = function (form) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fireAuth.auth.signInWithEmailAndPassword(form.email, form.pass));
    };
    AuthService.prototype.logined = function () {
        return this.user.map(function (user) { return user && !Object(__WEBPACK_IMPORTED_MODULE_3_util__["isUndefined"])(user.uid); });
    };
    AuthService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fireAuth.auth.signOut());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" *ngIf=\"loader | async\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  position: absolute;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  pointer-events: none; }\n\n.item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  transition: background .25s ease;\n  background: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../../src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.loader = this.loaderService.loader$;
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loader/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_service__ = __webpack_require__("../../../../../src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoaderModule = (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatProgressSpinnerModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loader_component__["a" /* LoaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loader_component__["a" /* LoaderComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__loader_service__["a" /* LoaderService */]]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
        this.loader$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    LoaderService.prototype.show = function () {
        this.loader$.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.loader$.next(false);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"coin-header\">\r\n  <div class=\"container\">\r\n    <div class=\"coin__header\">\r\n      <p class=\"coin__ticket m-0\" (click)=\"openPopup()\">{{ coin }}/USD</p>\r\n      <p class=\"coin__balance m-0\">{{ availableMoney + profit | currency }} </p>\r\n      <p class=\"coin__profit m-0\">{{ profit | currency }}</p>\r\n      <div class=\"coin__input\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"coin\">\r\n      </div>\r\n      <button (click)=\"buy()\">Buy</button>\r\n      <button class=\"btn btn-secondary ml-2\">\r\n        <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <hr>\r\n  <p>Currency price: <b> {{ price | number:'1.2-8' }}</b></p>\r\n\r\n\r\n  <hr>\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Open</th>\r\n      <th scope=\"col\">Count</th>\r\n      <th scope=\"col\">Close</th>\r\n      <th scope=\"col\">Profit</th>\r\n      <th scope=\"col\">Trend</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr class=\"coin__row\" *ngFor=\"let item of history; let i = index\"\r\n        [ngClass]=\"{'green': item.profit > 0, 'red': item.profit < 0}\">\r\n      <th scope=\"row\">{{ i + 1}}</th>\r\n      <td>{{ item.open | currency}}</td>\r\n      <td>{{ item.count | number:'1.0-2' }}</td>\r\n      <td>{{ item.close | currency}}</td>\r\n      <td>\r\n        {{ item.profit | currency}}\r\n        <span *ngIf=\"item.status === 1 && item.trend\">({{ currencyProfit | percent:'0.2-2' }})</span>\r\n      </td>\r\n      <td>{{ item.trend === -1 ? 'SHORT' : item.trend === 1 ? 'LONG' : 'WAIT'}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<div class=\"popup\" *ngIf=\"settings\">\r\n  <div class=\"popup__over\" (click)=\"openPopup(false)\"></div>\r\n  <div class=\"popup__window\">\r\n    <div class=\"form-group\">\r\n      <label>Loss</label>\r\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"config.loss\"><br>\r\n\r\n      <label>Profit</label>\r\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"config.profit\"><br>\r\n\r\n      <label>Step</label>\r\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"config.step\"><br>\r\n\r\n      <label>Out</label>\r\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"config.hardOut\">\r\n      <div class=\"popup__btn-wrap\">\r\n        <button class=\"btn btn-primary\" (click)=\"openPopup(false)\">ok</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coin-header {\n  background: #f2f2f2;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.coin__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.coin__balance, .coin__profit, .coin__ticket {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 120px;\n          flex: 0 0 120px; }\n\n.coin__input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 0px;\n          flex: 1 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .coin__input input {\n    width: 200px; }\n\n.coin__row.red {\n  background: rgba(255, 129, 130, 0.25); }\n\n.coin__row.green {\n  background: rgba(95, 128, 97, 0.25); }\n\n.popup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .popup__over {\n    background: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%; }\n  .popup__window {\n    width: 500px;\n    padding: 20px;\n    background: #fff;\n    border-radius: 4px;\n    position: relative;\n    z-index: 2; }\n  .popup__btn-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_trade_service__ = __webpack_require__("../../../../../src/app/services/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = (function () {
    function MainComponent(storage, main, trade) {
        this.storage = storage;
        this.main = main;
        this.trade = trade;
        this.coin = this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* LocalStorage */].COIN) || 'BTC';
        this.list = this.trade.history;
        this.availableMoney = 10000;
        this.config = this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* LocalStorage */].SETTINGS) || {
            loss: 0.1,
            profit: 0.5,
            step: 0.1,
            hardOut: 10
        };
    }
    Object.defineProperty(MainComponent.prototype, "historyProfit", {
        get: function () {
            var profit = 0;
            this.trade.history.map(function (val) { return profit += val.profit; });
            return profit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "profit", {
        get: function () {
            return this.currencyProfit + this.historyProfit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "step", {
        get: function () {
            return Number((this.availableMoney / this.price / this.config.hardOut).toFixed(2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "history", {
        get: function () {
            if (this.list.length > 20) {
                this.list.length = 20;
                return this.list;
            }
            else {
                return this.list;
            }
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* LocalStorage */].COIN, this.coin);
        this.priceListener();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(1, 1000).subscribe(function (val) { return _this.cycle(val); });
    };
    MainComponent.prototype.cycle = function (data) {
        if (!this.price)
            return console.log('unavailable currently price');
        this.currencyProfit = this.getCurrProfitInPer();
        if (this.order.trend === __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].WAIT) {
            if ((this.price - this.order.open) / this.price * 100 <= this.config.loss * -1)
                this.openPosition(__WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].SHORT);
            if ((this.price - this.order.open) / this.price * 100 >= this.config.loss)
                this.openPosition(__WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].LONG);
        }
        else {
            (this.currencyProfit * 100) <= this.config.loss * -1 ? this.invertPosition() :
                (this.currencyProfit * 100) >= this.config.profit ? this.closePosition() : null;
        }
    };
    MainComponent.prototype.invertPosition = function () {
        if (this.order.count === this.config.hardOut)
            return this.closePosition();
        var trend = this.order.trend === __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].SHORT ? __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].LONG : __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].SHORT;
        var position = this.order.count + this.step;
        this.trade.closePosition(this.price, this.order);
        this.openPosition(trend, position);
    };
    MainComponent.prototype.openPosition = function (trend, count) {
        if (count === void 0) { count = this.step; }
        this.trade.openPosition(this.price, trend, count);
        this.checkPosition(true);
    };
    MainComponent.prototype.closePosition = function () {
        this.trade.closePosition(this.price, this.order);
        this.order = this.trade.openPosition(this.price, __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].WAIT, 0);
        this.checkPosition(true);
    };
    MainComponent.prototype.getCurrProfitInPer = function () {
        return this.updateCurrencyProfit(this.order).profit / (this.order.open * this.order.count);
    };
    MainComponent.prototype.updateCurrencyProfit = function (order) {
        if (order.status !== __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["a" /* OrderStatus */].OPEN)
            return;
        order.profit = (this.price - order.open) * order.count * order.trend;
        return order;
    };
    MainComponent.prototype.openPopup = function (open) {
        if (open === void 0) { open = true; }
        if (!open)
            this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* LocalStorage */].SETTINGS, this.config);
        this.settings = open;
    };
    MainComponent.prototype.currency = function (take, get) {
        return take + "_" + get;
    };
    MainComponent.prototype.priceListener = function () {
        var _this = this;
        this.main.getByTicked(this.currency('USDT', 'BTC')).subscribe(function (val) {
            _this.price = Number(val.last);
            _this.checkPosition();
        });
    };
    MainComponent.prototype.checkPosition = function (force) {
        if (this.checkedPosition && !force)
            return;
        this.list = this.trade.history;
        !this.trade.position ? this.openPosition(__WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].LONG) : this.list.unshift(this.order = this.trade.position);
        this.checkedPosition = true;
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_storage_service__["b" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_4__services_trade_service__["c" /* TradeService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_service__ = __webpack_require__("../../../../../src/app/main/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__main_service__["a" /* MainService */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PriceResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PriceResponse = (function () {
    function PriceResponse() {
    }
    return PriceResponse;
}());

var MainService = (function () {
    function MainService(http, db, auth) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.auth = auth;
        this.currencies$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(1, 1000).subscribe(function () {
            return _this.http.get("//poloniex.com/public?command=returnTicker").subscribe(function (val) { return _this.currencies$.next(val); });
        });
    }
    MainService.prototype.getByTicked = function (ticked) {
        return this.currencies$.map(function (val) { return val[ticked]; });
    };
    MainService.prototype.getRequestOptionArgs = function (options) {
        if (options == null)
            options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* RequestOptions */]();
        if (options.headers == null)
            options.headers = new Headers();
        options.headers.append('Key', 'awdawdawd');
        options.headers.append('Access-Control-Allow-Origin', '*');
        return options;
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorage = {
    PROFIT: 'profit',
    POSITION: 'position',
    COIN: 'coin',
    SETTINGS: 'settings',
    HISTORY: 'history'
};
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.set = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    StorageService.prototype.remove = function (item) {
        localStorage.removeItem(item);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/trade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TradeService; });
/* unused harmony export Order */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["CLOSE"] = 0] = "CLOSE";
    OrderStatus[OrderStatus["OPEN"] = 1] = "OPEN";
})(OrderStatus || (OrderStatus = {}));
var OrderTrend;
(function (OrderTrend) {
    OrderTrend[OrderTrend["LONG"] = 1] = "LONG";
    OrderTrend[OrderTrend["SHORT"] = -1] = "SHORT";
    OrderTrend[OrderTrend["WAIT"] = 0] = "WAIT";
})(OrderTrend || (OrderTrend = {}));
var TradeService = (function () {
    function TradeService(storage) {
        this.storage = storage;
    }
    Object.defineProperty(TradeService.prototype, "position", {
        get: function () {
            return this.storage.get(__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* LocalStorage */].POSITION);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeService.prototype, "history", {
        get: function () {
            return this.storage.get(__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* LocalStorage */].HISTORY) || [];
        },
        enumerable: true,
        configurable: true
    });
    TradeService.prototype.openPosition = function (price, trend, count) {
        var order = new Order({ open: price, trend: trend, count: count, status: OrderStatus.OPEN });
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* LocalStorage */].POSITION, order);
        return order;
    };
    TradeService.prototype.closePosition = function (price, order) {
        order.close = price;
        order.status = OrderStatus.CLOSE;
        var history = this.history;
        history.unshift(order);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* LocalStorage */].HISTORY, history);
        return order;
    };
    TradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_service__["b" /* StorageService */]])
    ], TradeService);
    return TradeService;
}());

var Order = (function () {
    function Order(data) {
        this.open = data.open;
        this.close = data.close;
        this.profit = data.profit;
        this.count = data.count;
        this.status = data.status;
        this.trend = data.trend;
    }
    return Order;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = (function () {
    function User() {
    }
    return User;
}());

var UserService = (function () {
    function UserService() {
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBj8SFTP4DMwjOWsvhTga6_L0MDz6tWQAM",
        authDomain: "fire-chat-8a33a.firebaseapp.com",
        databaseURL: "https://fire-chat-8a33a.firebaseio.com",
        projectId: "fire-chat-8a33a",
        storageBucket: "fire-chat-8a33a.appspot.com",
        messagingSenderId: "799525476658"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
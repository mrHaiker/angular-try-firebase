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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__main_main_module__["a" /* MainModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["b" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_trade_service__["c" /* TradeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"coin-header\">\n  <div class=\"container\">\n    <div class=\"coin__header\">\n      <p class=\"coin__ticket m-0\">{{ coin }}/USD</p>\n      <p class=\"coin__balance m-0\">{{ availableMoney + profit | currency }} </p>\n      <p class=\"coin__profit m-0\">{{ profit | currency }}</p>\n      <div class=\"coin__input\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"coin\">\n      </div>\n\n      <button class=\"btn btn-secondary ml-2\">\n        <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <hr>\n  <p>Currency price: <span> {{ price | currency }}</span></p>\n\n\n  <hr>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Open</th>\n      <th scope=\"col\">Count</th>\n      <th scope=\"col\">Close</th>\n      <th scope=\"col\">Profit</th>\n      <th scope=\"col\">Trend</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr class=\"coin__row\" *ngFor=\"let item of list; let i = index\"\n        [ngClass]=\"{'green': item.profit > 0, 'red': item.profit < 0}\">\n      <th scope=\"row\">{{ i + 1}}</th>\n      <td>{{ item.open | currency}}</td>\n      <td>{{ item.count}}</td>\n      <td>{{ item.close | currency}}</td>\n      <td>\n        {{ item.profit | currency}}\n        <span *ngIf=\"item.status === 1 && item.trend\">({{ currencyProfit | percent:'0.2-2' }})</span>\n      </td>\n      <td>{{ item.trend === -1 ? 'SHORT' : item.trend === 1 ? 'LONG' : 'WAIT'}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coin-header {\n  background: #f2f2f2;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.coin__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n\n.coin__balance, .coin__profit, .coin__ticket {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 120px;\n          flex: 0 0 120px; }\n\n.coin__input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 0px;\n          flex: 1 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .coin__input input {\n    width: 200px; }\n\n.coin__row.red {\n  background: rgba(255, 129, 130, 0.25); }\n\n.coin__row.green {\n  background: rgba(95, 128, 97, 0.25); }\n", ""]);

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
    function MainComponent(main, trade) {
        this.main = main;
        this.trade = trade;
        this.coin = 'BTC';
        this.list = this.trade.history;
        this.availableMoney = 10000;
        this.config = {
            loss: 0.1,
            profit: 0.5,
            step: 1,
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
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        var position = this.order.count + this.config.step;
        this.trade.closePosition(this.price, this.order);
        this.openPosition(trend, position);
    };
    MainComponent.prototype.openPosition = function (trend, count) {
        if (count === void 0) { count = 1; }
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
    MainComponent.prototype.priceListener = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].timer(1, 10000).subscribe(function () { return _this.main.getPrice(_this.coin).subscribe(function (val) { return _this.price = Number(val.USD); }).add(function () { return _this.checkPosition(); }); });
    };
    MainComponent.prototype.checkPosition = function (force) {
        if (this.checkedPosition && !force)
            return;
        this.list = this.trade.history;
        !this.trade.position ? this.openPosition(__WEBPACK_IMPORTED_MODULE_4__services_trade_service__["b" /* OrderTrend */].LONG) : this.list.unshift(this.order = this.trade.position);
        this.checkedPosition = true;
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
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
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.getPrice = function (ticked) {
        return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=" + ticked.toUpperCase() + "&tsyms=USD");
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        if (count === void 0) { count = 1; }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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
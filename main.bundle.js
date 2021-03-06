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

/***/ "./src/app/app.main.css":
/***/ (function(module, exports) {

module.exports = ".selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.converter-title{\r\n  text-align: center;\r\n}\r\n.converters_list {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n.converters_list li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n  }\r\n.converters_list li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n.converters_list li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\ntextarea {\r\n  width: 100%;\r\n  background-color: #EEE;\r\n  border-radius: 4px;\r\n}\r\nspan {\r\n  color:black;\r\n}\r\nh1{\r\n  text-align: center;\r\n}\r\n/*bootstrap*/\r\n.container {\r\n    background-color:whitesmoke;\r\n  }"

/***/ }),

/***/ "./src/app/app.main.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h1>Simple text converter</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <textarea textarea-autoheight [(ngModel)]=\"inputText\"></textarea>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <ul class=\"converters_list\">\r\n        <li *ngFor=\"let converter of converters\" [class.selected]=\"converter === current_converter\" (click)=\"onConverterSelect(converter)\">\r\n          <span>{{converter.name}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <textarea textarea-autoheight [textare_autoheight_change_track]=\"inputText\" readonly>{{getConvertedText()}}</textarea>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMain; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converter__ = __webpack_require__("./src/app/converter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMain = /** @class */ (function () {
    function AppMain() {
        this.inputText = '';
        this.converters = [new __WEBPACK_IMPORTED_MODULE_1__converter__["b" /* NoConverter */], new __WEBPACK_IMPORTED_MODULE_1__converter__["c" /* ToBase64Converter */], new __WEBPACK_IMPORTED_MODULE_1__converter__["a" /* FromBase64Converter */]];
        this.current_converter = this.converters[1];
    }
    AppMain.prototype.getConvertedText = function () {
        return this.current_converter.convert(this.inputText);
    };
    ;
    AppMain.prototype.onConverterSelect = function (converter) {
        this.current_converter = converter;
    };
    AppMain = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'text-converter-app',
            template: __webpack_require__("./src/app/app.main.html"),
            styles: [__webpack_require__("./src/app/app.main.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppMain);
    return AppMain;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_main__ = __webpack_require__("./src/app/app.main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textarea_autoheight_directive__ = __webpack_require__("./src/app/textarea-autoheight.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_main__["a" /* AppMain */],
                __WEBPACK_IMPORTED_MODULE_5__textarea_autoheight_directive__["a" /* TextareaAutoheightDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_main__["a" /* AppMain */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/converter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToBase64Converter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromBase64Converter; });
var NoConverter = /** @class */ (function () {
    function NoConverter() {
        this.name = "NoConvertConverter";
    }
    NoConverter.prototype.convert = function (text) {
        return text;
    };
    return NoConverter;
}());

var ToBase64Converter = /** @class */ (function () {
    function ToBase64Converter() {
        this.name = "ToBase64ConvertConverter";
    }
    ToBase64Converter.prototype.convert = function (text) {
        return btoa(text);
    };
    return ToBase64Converter;
}());

var FromBase64Converter = /** @class */ (function () {
    function FromBase64Converter() {
        this.name = "FromBase64ConvertConverter";
    }
    FromBase64Converter.prototype.convert = function (text) {
        return atob(text);
    };
    return FromBase64Converter;
}());



/***/ }),

/***/ "./src/app/textarea-autoheight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaAutoheightDirective; });
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

var TextareaAutoheightDirective = /** @class */ (function () {
    function TextareaAutoheightDirective(element) {
        this.element = element;
        this.el = element.nativeElement;
        this.updateHeight();
    }
    TextareaAutoheightDirective.prototype.ngOnChanges = function (changes) {
        this.updateHeight();
    };
    TextareaAutoheightDirective.prototype.updateHeight = function () {
        this.el.style.overflow = 'hidden';
        this.el.style.height = 'auto';
        this.el.style.height = this.element.nativeElement.scrollHeight + 'px';
    };
    TextareaAutoheightDirective.prototype.onInput = function (textArea) {
        this.updateHeight();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], TextareaAutoheightDirective.prototype, "textare_autoheight_change_track", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], TextareaAutoheightDirective.prototype, "onInput", null);
    TextareaAutoheightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'textarea[textarea-autoheight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TextareaAutoheightDirective);
    return TextareaAutoheightDirective;
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
    production: false
};


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
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
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var seed_app_1 = require('./app/seed-app');
var http_2 = require('angular2/http');
var ExRequestOptions = (function (_super) {
    __extends(ExRequestOptions, _super);
    function ExRequestOptions() {
        _super.call(this);
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('X-CSRF-TOKEN', this.getCookie('XSRF-TOKEN'));
    }
    ExRequestOptions.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    ExRequestOptions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ExRequestOptions);
    return ExRequestOptions;
}(http_2.BaseRequestOptions));
exports.ExRequestOptions = ExRequestOptions;
browser_1.bootstrap(seed_app_1.SeedApp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(http_2.RequestOptions, { useClass: ExRequestOptions })])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map
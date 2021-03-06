"use strict";
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
var router_1 = require('angular2/router');
var ad_list_1 = require('../ad-list/ad-list');
var ad_1 = require('../../services/ad');
var Home = (function () {
    function Home(router, ad) {
        this.router = router;
        this.ad = ad;
    }
    Home.prototype.postAd = function (text) {
        this.ad.create(text);
        return false;
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/components/home/home.html',
            styleUrls: ['app/components/home/home.css'],
            providers: [],
            directives: [router_1.ROUTER_DIRECTIVES, ad_list_1.AdList],
            pipes: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, ad_1.Ad])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map
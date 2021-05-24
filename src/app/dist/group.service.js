"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupService = void 0;
var core_1 = require("@angular/core");
var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
        this.apiUrl = 'https://5f7415b4b63868001615ff6f.mockapi.io/group/';
    }
    GroupService.prototype.getList = function () {
        return this.http.get(this.apiUrl);
        console.log(this.apiUrl);
    };
    GroupService.prototype.GetSingle = function (id) {
        return this.http.get(this.apiUrl + id);
    };
    GroupService.prototype.Updated = function (id, data) {
        return this.http.put(this.apiUrl + id, data);
    };
    GroupService.prototype.Add = function (data) {
        return this.http.post(this.apiUrl, data);
    };
    GroupService.prototype.Delete = function (id) {
        return this.http["delete"](this.apiUrl + id);
    };
    GroupService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;

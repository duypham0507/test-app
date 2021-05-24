"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SystemModuleModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var quannd_component_1 = require("./quannd/quannd.component");
var router_1 = require("@angular/router");
var routes = [
    { path: 'new-window', component: quannd_component_1.QuanndComponent },
];
var SystemModuleModule = /** @class */ (function () {
    function SystemModuleModule() {
    }
    SystemModuleModule = __decorate([
        core_1.NgModule({
            declarations: [quannd_component_1.QuanndComponent],
            imports: [
                common_1.CommonModule,
                // RouterModule.forRoot(routes)
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], SystemModuleModule);
    return SystemModuleModule;
}());
exports.SystemModuleModule = SystemModuleModule;

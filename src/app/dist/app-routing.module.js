"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = exports.appRoutes = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_add_component_1 = require("./test-http/group-add/group-add.component");
var group_detail_component_1 = require("./test-http/group-detail/group-detail.component");
var group_edit_component_1 = require("./test-http/group-edit/group-edit.component");
var login_component_1 = require("./login/login.component");
var notfound_component_1 = require("./notfound/notfound.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var test_angular_component_1 = require("./test-angular/test-angular.component");
var test_http_component_1 = require("./test-http/test-http.component");
var group_overview_component_1 = require("./test-http/group-overview/group-overview.component");
var group_project_component_1 = require("./test-http/group-project/group-project.component");
var check_login_guard_1 = require("./check-login.guard");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'people', component: test_angular_component_1.TestAngularComponent },
    { path: 'group', component: test_http_component_1.TestHttpComponent, canActivate: [check_login_guard_1.CheckLoginGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'group-detail/:id', component: group_detail_component_1.GroupDetailComponent, children: [
            { path: 'overview', component: group_overview_component_1.GroupOverviewComponent },
            { path: 'project', component: group_project_component_1.GroupProjectComponent },
        ] },
    { path: 'group-edit/:id', component: group_edit_component_1.GroupEditComponent },
    { path: 'group-add', component: group_add_component_1.GroupAddComponent },
    { path: '**', component: notfound_component_1.NotfoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

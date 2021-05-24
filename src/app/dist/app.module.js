"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var group_service_1 = require("./service/group.service");
var app_component_1 = require("./app.component");
var test_angular_component_1 = require("./test-angular/test-angular.component");
var test_http_component_1 = require("./test-http/test-http.component");
var http_1 = require("@angular/common/http");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var check_login_component_1 = require("./check-login/check-login.component");
var notfound_component_1 = require("./notfound/notfound.component");
var group_detail_component_1 = require("./test-http/group-detail/group-detail.component");
var group_edit_component_1 = require("./test-http/group-edit/group-edit.component");
var group_add_component_1 = require("./test-http/group-add/group-add.component");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material/material.module");
var form_field_1 = require("@angular/material/form-field");
var core_2 = require("@angular/material/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var text_directive_1 = require("./directive/text.directive");
var check_app_pipe_1 = require("./pipes/check-app.pipe");
var child_http_component_1 = require("./test-http/child-http/child-http.component");
var check_home_component_1 = require("./home/check-home/check-home.component");
var group_overview_component_1 = require("./test-http/group-overview/group-overview.component");
var group_project_component_1 = require("./test-http/group-project/group-project.component");
var login_service_1 = require("./service/login.service");
var check_login_guard_1 = require("./check-login.guard");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'people', component: test_angular_component_1.TestAngularComponent },
    { path: 'group', component: test_http_component_1.TestHttpComponent },
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                test_angular_component_1.TestAngularComponent,
                test_http_component_1.TestHttpComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                check_login_component_1.CheckLoginComponent,
                notfound_component_1.NotfoundComponent,
                group_detail_component_1.GroupDetailComponent,
                group_edit_component_1.GroupEditComponent,
                group_add_component_1.GroupAddComponent,
                sign_up_component_1.SignUpComponent,
                text_directive_1.TextDirective,
                check_app_pipe_1.CheckAppPipe,
                child_http_component_1.ChildHttpComponent,
                check_home_component_1.CheckHomeComponent,
                group_overview_component_1.GroupOverviewComponent,
                group_project_component_1.GroupProjectComponent,
            ],
            imports: [
                router_1.RouterModule.forRoot(routes),
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                core_2.MatNativeDateModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                group_service_1.GroupService,
                login_service_1.LoginService,
                check_login_guard_1.CheckLoginGuard,
                { provide: form_field_1.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)["catch"](function (err) { return console.error(err); });

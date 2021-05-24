"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    // email = new FormControl('', [Validators.required]);
    // hide = true;
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    // getErrorMessage(): string{
    //   if (this.email.hasError('required')) {
    //     return 'You must enter a value';
    //   }
    //   return this.email.hasError('email') ? 'Not a valid email' : '';
    // }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.CheckLogin = function (value) {
        console.log(value);
        if (value.username == "DuyPQ" && value.password == "123456@") {
            this.service.SetLogin(true);
            this.router.navigate(['/']);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

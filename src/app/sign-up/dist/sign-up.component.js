"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignUpComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var check_validator_1 = require("../check-validator");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.item = {};
        this.Address = [
            { name: 'Hà Nội' },
            { name: 'Đà Nẵng' },
            { name: 'Tp HCM' },
            { name: 'Thái Bình' },
        ];
        // addressControl = new FormControl('', Validators.required);
        // phoneNumber = new FormControl('', Validators.required);
        this.hide = true;
        this.formErrors = {
            email: {},
            password: {},
            confirmPassword: {},
            date: {},
            addressControl: {},
            phoneNumber: {}
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), check_validator_1.CheckValidator.checkPassword])),
            this.confirmPassword = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, check_validator_1.CheckValidator.comparisonValidator(this.password)])),
            this.form = this.formBuilder.group({
                email: new forms_1.FormControl(this.item.email, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email, forms_1.Validators.maxLength(30), forms_1.Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])),
                password: this.password,
                confirmPassword: this.confirmPassword,
                date: new forms_1.FormControl(this.item.date, forms_1.Validators.compose([forms_1.Validators.required])),
                addressControl: new forms_1.FormControl(this.item.addressControl, forms_1.Validators.compose([forms_1.Validators.required])),
                phoneNumber: new forms_1.FormControl(this.item.phoneNumber, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/(09|01[2|6|8|9])+([0-9]{8})\b/)]))
            });
        this.form.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
    };
    SignUpComponent.prototype.onFormValuesChanged = function () {
        for (var field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            this.formErrors[field] = {};
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid && !control.pending) {
                this.formErrors[field] = control.errors ? control.errors : {};
            }
        }
    };
    SignUpComponent.prototype.CheckSignUp = function (value) {
        this.router.navigate(['/']);
        console.log(value);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        })
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;

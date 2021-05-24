"use strict";
exports.__esModule = true;
exports.CheckValidator = void 0;
;
var CheckValidator = /** @class */ (function () {
    function CheckValidator() {
    }
    // static checkPassword: ValidatorFn;
    CheckValidator.checkPassword = function (control) {
        if (control.value != null && control.value != undefined && control.value != ""
            && !CheckValidator.passwordRegex.test(control.value)) {
            return { 'checkPassword': true };
        }
        return null;
    };
    CheckValidator.comparisonValidator = function (compareControl) {
        return function (control) {
            if (control.value !== compareControl.value) {
                return { "comparisonValidator": true };
            }
            return null;
        };
    };
    CheckValidator.notEqualsTo = function (compareControl) {
        return function (control) {
            if (control.value === compareControl.value) {
                return { "notEqualsTo": true };
            }
            return null;
        };
    };
    CheckValidator.passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    return CheckValidator;
}());
exports.CheckValidator = CheckValidator;

import { FormControl, ValidatorFn } from "@angular/forms";

interface ValidationErrors  {
  [key: string]: boolean;
};

export class CheckValidator {
  private static passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
  // static checkPassword: ValidatorFn;
  static checkPassword(control: FormControl): ValidationErrors {
    if(control.value != null && control.value != undefined && control.value != ""
    && !CheckValidator.passwordRegex.test(control.value)) {
      return {'checkPassword' : true};
    }
    return null;
  }

  static comparisonValidator(compareControl: FormControl): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
        if (control.value !== compareControl.value) {
            return { "comparisonValidator": true };
        }
        return null;
    };
}
  static notEqualsTo(compareControl: FormControl): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
        if (control.value === compareControl.value) {
            return { "notEqualsTo": true };
        }
        return null;
    };
 }
}

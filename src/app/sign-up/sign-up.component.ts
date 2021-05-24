import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CheckValidator } from '../check-validator';


interface Address {
  name: string;

}

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  password: FormControl;
  confirmPassword: FormControl;
  formErrors: any;
  item: any = {};

  Address: Address[] = [
    {name: 'Hà Nội'},
    {name: 'Đà Nẵng'},
    {name: 'Tp HCM'},
    {name: 'Thái Bình'},
  ];
  // addressControl = new FormControl('', Validators.required);
  // phoneNumber = new FormControl('', Validators.required);
  hide = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formErrors = {
      email: {},
      password: {},
      confirmPassword: {},
      date: {},
      addressControl: {},
      phoneNumber: {}
  };
  }

  ngOnInit(): void {
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), CheckValidator.checkPassword])),
    this.confirmPassword = new FormControl('', Validators.compose([Validators.required, CheckValidator.comparisonValidator(this.password)])),
    this.form = this.formBuilder.group({
      email: new FormControl(this.item.email, Validators.compose([Validators.required, Validators.email, Validators.maxLength(30), Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])),
      password: this.password,
      confirmPassword: this.confirmPassword,
      date: new FormControl(this.item.date, Validators.compose([Validators.required])),
      addressControl: new FormControl(this.item.addressControl, Validators.compose([Validators.required])),
      phoneNumber: new FormControl(this.item.phoneNumber, Validators.compose([Validators.required, Validators.pattern(/(09|01[2|6|8|9])+([0-9]{8})\b/)]))
    });
    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  onFormValuesChanged(): void {
      for (const field in this.formErrors) {
          if (!this.formErrors.hasOwnProperty(field)) {
              continue;
          }
          this.formErrors[field] = {};
          const control = this.form.get(field);

          if (control && control.dirty && !control.valid && !control.pending) {
              this.formErrors[field] = control.errors ? control.errors : {};
          }
      }
  }

  CheckSignUp(value: any): void{
    this.router.navigate(['/']);
    console.log(value);
  }


}






import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('', [Validators.required]);
  // hide = true;
  constructor(
    private router: Router,
    private service: LoginService
  ) { }


  // getErrorMessage(): string{
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }



  ngOnInit(): void {

  }

  CheckLogin(value: any) {
    console.log(value);
    if(value.username == "DuyPQ" && value.password == "123456@"){
      this.service.SetLogin(true);
      this.router.navigate(['/']);
    }
  }

}

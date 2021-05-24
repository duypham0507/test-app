import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  hideLogin: boolean = false;
  hideSignUp: boolean = false;
  hideLogout: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(){

  }

  // Login(){
  //   this.router.navigate(['login'])

  // }

  // SignUp(){
  //   this.router.navigate(['sign-up']);
  //   this.hideSignUp = true;
  // }

  // LogOut(){
  //   this.router.navigate(['login']);
  //   this.hideLogout = true;
  // }
}



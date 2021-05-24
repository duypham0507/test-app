import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _isLoggedIn: boolean;
  constructor() { }

  IsLogged(){
    return this._isLoggedIn;
  }

  SetLogin(isLogged: boolean){
    this._isLoggedIn = isLogged;
  }
}

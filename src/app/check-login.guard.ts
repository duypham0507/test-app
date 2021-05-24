import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './service/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(private service: LoginService){}

  canActivate() {
    return this.service.IsLogged();
  }
}

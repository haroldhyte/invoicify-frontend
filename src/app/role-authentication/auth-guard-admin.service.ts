import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return this.isThisRoleOrHigher();
  }

  isThisRole(): boolean {
    return this.auth.getUserRole() == "admin";
  }

  isThisRoleOrHigher(): boolean {
    return this.isThisRole();
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AllyAuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return this.auth.getUserRole() == "ally";
  }

  isThisRole(): boolean {
    return this.auth.getUserRole() == "ally";
  }

  isThisRoleOrHigher(): boolean {
    return (this.isThisRole() ||
    this.auth.getUserRole() == "admin");
  }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class ClientAuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return this.isThisRole();
  }

  isThisRole(): boolean {
    return this.auth.getUserRole() == "client";
  }

  isThisRoleOrHigher(): boolean {
    return (this.isThisRole() ||
    this.auth.getUserRole() == "ally" ||
    this.auth.getUserRole() == "admin");
  }

  companyAccess() {
    return this.auth.getUserCompany();
  }

}

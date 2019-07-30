import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class AuthService {

  constructor(private dataService: DataService) {}

  login(user){

    return this.dataService.editRecord("session", user).map(
      result => {
        localStorage.setItem("auth_user", JSON.stringify(result));
      }
    )

  }

  logout(){

    return this.dataService.deleteRecord("session").map(
      result => {
        localStorage.removeItem("auth_user");
      }
    )

  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_user");
  }

  public getUserRole(): string {
    if (this.isAuthenticated())
    {
      let auth_user = JSON.parse(localStorage.getItem("auth_user"));
      return auth_user.type;
    } else return "unauthenticated";
  }

  public getUserCompany() {
    let auth_user = JSON.parse(localStorage.getItem("auth_user"));
    return auth_user.company;
  }
}

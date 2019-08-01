import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClientAuthGuard } from '../role-authentication/auth-guard-client.service';
import { AllyAuthGuard } from '../role-authentication/auth-guard-ally.service';
import { AdminAuthGuard } from '../role-authentication/auth-guard-admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  auth_user;

  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService, public router: Router,
    private clientAuth: ClientAuthGuard, private allyAuth: AllyAuthGuard, private adminAuth: AdminAuthGuard) { }

  ngOnInit() {
    this.refreshUser();
  }

  logout(){
    this.authService.logout().subscribe(
      success=> {
        this.refreshUser();
        this.router.navigate(["home"])
      }
    );
  }

  login(user: NgForm){
    this.authService.login(user.value).subscribe(
      success=> {
        this.refreshUser();
      },
      error => {
        this.errorMessage = "Invalid login"
      }
    );
  }

  refreshUser(){
    this.auth_user = JSON.parse(localStorage.getItem("auth_user"));
  }

}

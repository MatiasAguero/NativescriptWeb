import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserInfo } from '../auth/user-info';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  isAuthenticating = false;
  errorMessage = '';
  username: string;
  password: string;
  roles: string[] = [];
  private loginInfo: UserInfo;

  @ViewChild("passwrd", { static: false }) pass: ElementRef;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  focusPassword() {
    this.pass.nativeElement.focus();
  }

  onSubmit() {
    this.isAuthenticating = true;

    this.loginInfo = new UserInfo(
      this.username,
      this.password);

    this.authService.login(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.isAuthenticating = false;

        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(["/"]);
      },
      error => {
        console.log(error);
        this.isAuthenticating=false;
        this.isLoginFailed=true;
        alert("Error logueando:"+error.error.message);
      }
    );
  }

  logout() {

  	this.tokenStorage.signOut();
    this.isLoggedIn = false;
  }


}

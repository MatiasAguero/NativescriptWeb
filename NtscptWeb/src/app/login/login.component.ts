import { Component, OnInit } from '@angular/core';
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
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  isAuthenticating = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: UserInfo;
 
  @ViewChild("password", { static: false }) password: ElementRef;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router) { }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
 
  focusPassword() {
    this.password.nativeElement.focus();
  }

  onSubmit() {
    console.log(this.form);
    this.isAuthenticating = true;

    this.loginInfo = new UserInfo(
      this.form.username,
      this.form.password);
 
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
        alert("Error logueando:"+error.error.message);
      }
    );
  }
 

}
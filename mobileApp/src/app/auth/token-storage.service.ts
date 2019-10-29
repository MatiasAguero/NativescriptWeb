import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as appSettings from "tns-core-modules/application-settings";
 
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  private helper = new JwtHelperService();
  constructor() { }
 
  signOut() {
   appSettings.clear();
  }
 
  public saveToken(token: string) {
    appSettings.remove(TOKEN_KEY);
    appSettings.setString(TOKEN_KEY, token);
  }
 
  public getToken(): string {
    return appSettings.getString(TOKEN_KEY);
  }
 
  public saveUsername(username: string) {
    appSettings.remove(USERNAME_KEY);
    appSettings.setString(USERNAME_KEY, username);
  }
 
  public getUsername(): string {
    return appSettings.getString(USERNAME_KEY);
  }
 
  public saveAuthorities(authorities: string[]) {
    appSettings.remove(AUTHORITIES_KEY);
    appSettings.setString(AUTHORITIES_KEY, JSON.stringify(authorities));
  }
 
  public getAuthorities(): string[] {
    this.roles = [];
 
    if (appSettings.getString(TOKEN_KEY)) {
      JSON.parse(appSettings.getString(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
 
    return this.roles;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    var islogged=false;
    if (token!=null) {islogged=true;}
    return islogged;
  }

  public isAdmin(): boolean {
    const authorities = this.getAuthorities();
    var isAdmin= false;
    authorities.forEach(function(auth) {
      if (auth=="ROLE_ADMIN") {isAdmin=true;}
    });

    return isAdmin;
  }

}

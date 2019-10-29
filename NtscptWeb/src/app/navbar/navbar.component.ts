import { Component, OnInit } from '@angular/core';
//import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  //providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }

  constructor(private token: TokenStorageService, public router: Router) {
    
  }

  ngOnInit() {
  }

  logOut() {
    this.token.signOut();
    this.router.navigate(['/login']);
  }

}

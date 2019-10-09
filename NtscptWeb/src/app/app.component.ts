import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<page-router-outlet></page-router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  static baseURL = 'http://192.168.0.35:8080/api';

	constructor(private http: HttpClient, private router: Router) {
  }
}

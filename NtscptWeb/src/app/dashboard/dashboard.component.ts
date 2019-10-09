import { Component, OnInit } from '@angular/core';
import {Mesa } from '../model/mesa'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  	
	constructor() {
	
	}

	ngOnInit() {
  }


  registrarLogMesa(mesaARegistrar:Mesa){
  	
  }
}

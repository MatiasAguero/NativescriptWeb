import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';
import { Carrera } from '../model/carrera';
import { CarreraService } from '../services/carrera.service';
import { InscrMateriaComponent } from '../inscr-materia/inscr-materia.component';

import { NewlogService } from '../services/newlog.service';

@Component({
  selector: 'app-user-carreras',
  templateUrl: './user-carreras.component.html',
  styleUrls: ['./user-carreras.component.scss']
})
export class UserCarrerasComponent implements OnInit {
  carreras: Carrera[];

  carreraSelected: boolean=false;

  @ViewChild(InscrMateriaComponent, {static: false})
  public materias: InscrMateriaComponent;

  constructor(
    private carreraService: CarreraService,
    private ruta : ActivatedRoute,
    private location : Location,
    private newlogService: NewlogService
  ) { }

  ngOnInit() {
    this.getUserCarreras();
  }

  getUserCarreras() : void {
    this.carreraService.getUserCarreras().subscribe(carreras => this.carreras=carreras);
  }

  setCarrera(newSelectedCarrera: Carrera): void {
    this.newlogService.changeCarrera(newSelectedCarrera);
    this.carreraSelected=true;
  }

}

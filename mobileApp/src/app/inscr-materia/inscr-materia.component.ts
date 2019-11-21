import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Carrera } from '../model/carrera';
import { Log } from '../model/log';
import { Mesa } from '../model/mesa';
import { CarreraService } from '../services/carrera.service';
import { LogService } from '../services/log.service';
import { TokenStorageService } from '../auth/token-storage.service';

import { NewlogService } from '../services/newlog.service';

@Component({
  selector: 'app-inscr-materia',
  templateUrl: './inscr-materia.component.html',
  styleUrls: ['./inscr-materia.component.scss']
})
export class InscrMateriaComponent implements OnInit {
  selectedCarrera: Carrera;

  materias: string[];

  constructor(
    private logService: LogService,
    private carreraService: CarreraService,
    private tokenService: TokenStorageService,
    private ruta : ActivatedRoute,
    private location : Location,
    private newlogService: NewlogService
  ) { }

  ngOnInit() {


    this.newlogService.currentCarrera.subscribe(
      newCarrea => {this.selectedCarrera=newCarrea;
                  if(newCarrea!=null){
                    this.getMaterias();
                    this.newlogService.changeMateria(null);
                  }});
  }

  getMaterias() : void {
    if(this.selectedCarrera!=null){
      this.materias = this.selectedCarrera.materias;
    }
  }

  
  selectMateria(newSelectedMateria): void{
    this.newlogService.changeMateria(newSelectedMateria);
  }

}

import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { MesasComponent } from '../mesas/mesas.component';
import { UserCarrerasComponent } from '../user-carreras/user-carreras.component';
import { Log } from '../model/log';
import { TokenStorageService } from '../auth/token-storage.service';
import { LogService } from '../services/log.service';
import { NewlogService } from '../services/newlog.service';
import { Mesa } from '../model/mesa';
import { Carrera } from '../model/carrera';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {
  @ViewChild(MesasComponent, {static: false}) private mesas: MesasComponent;

  carrera: Carrera;
  carreraSelected: boolean=false;

  mesa: Mesa;
  mesaSelected: boolean=false;

  materia: string;
  materiaSelected: boolean=false;

  @ViewChild(UserCarrerasComponent, {static: false})
  private carreras: UserCarrerasComponent;

  constructor(private tokenService: TokenStorageService, private logService: LogService, private newlogService: NewlogService) { }

  ngOnInit() {
    this.newlogService.currentMesa.subscribe(
      newMesa => {this.mesa = newMesa;
                  if(this.mesa!=null){
                    this.mesaSelected=true;
                  }else{
                    this.mesaSelected=false;
                  }});

    this.newlogService.currentCarrera.subscribe(
      newCarrera => {this.carrera = newCarrera;
                  if(newCarrera!=null){
                    this.carreraSelected=true;
                  }else{
                    this.carreraSelected=false;
                  }});

    this.newlogService.currentMateria.subscribe(
      newMateria => {this.materia = newMateria;
                  if(newMateria!=null){
                    this.materiaSelected=true;
                  }else{
                    this.materiaSelected=false;
                  }});
  }

  generateLog() : void {
    let newLog = new Log(this.tokenService.getUsername(), this.mesa.nombre, this.materia, this.carrera.nombre,
                    'Pendiente', new Date());
    this.logService.createLog(newLog).subscribe(log => console.log("Log creado"+log));
  }

}

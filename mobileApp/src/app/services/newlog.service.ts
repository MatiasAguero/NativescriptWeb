import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mesa } from '../model/mesa';
import { Carrera } from '../model/carrera';

@Injectable({
  providedIn: 'root'
})
export class NewlogService {

  private mesaSource = new BehaviorSubject(null);
  currentMesa = this.mesaSource.asObservable();

  constructor() { }

  changeMesa(mesa: Mesa) {
    this.mesaSource.next(mesa)
  }

  private carreraSource = new BehaviorSubject(null);
  currentCarrera = this.carreraSource.asObservable();

  changeCarrera(carrera: Carrera) {
    this.carreraSource.next(carrera)
  }

  private materiaSource = new BehaviorSubject(null);
  currentMateria = this.materiaSource.asObservable();

  changeMateria(materia: string) {
    this.materiaSource.next(materia)
  }

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';
import { RegisterComponent } from '@src/app/register/register.component';
import { CarreraComponent } from '@src/app/admin/carrera/carrera.component';
import { CarreraFormComponent } from '@src/app/admin/carrera/carrera-form/carrera-form.component';
import { MesaComponent } from '@src/app/admin/mesa/mesa.component';
import { MesaFormComponent } from '@src/app/admin/mesa/mesa-form/mesa-form.component';
import { MesasComponent } from '@src/app/mesas/mesas.component';
import { LogsComponent } from '@src/app/logs/logs.component';
import { NewLogComponent } from '@src/app/new-log/new-log.component';
import { UsrCarreraSubsComponent } from '@src/app/usr-carrera-subs/usr-carrera-subs.component';
import { UserCarrerasComponent } from '@src/app/user-carreras/user-carreras.component';
import { InscrMateriaComponent } from '@src/app/inscr-materia/inscr-materia.component';
import { DetalleLogComponent } from '@src/app/detalle-log/detalle-log.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarreraComponent,
    CarreraFormComponent,
    MesaComponent,
    MesaFormComponent,
    MesasComponent,
    LogsComponent,
    NewLogComponent,
    UsrCarreraSubsComponent,
    UserCarrerasComponent,
    InscrMateriaComponent,
    DetalleLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

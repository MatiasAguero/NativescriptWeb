import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { httpInterceptorProviders} from '@src/app/auth/auth-interceptor';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { RegisterComponent } from '@src/app/register/register.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
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
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

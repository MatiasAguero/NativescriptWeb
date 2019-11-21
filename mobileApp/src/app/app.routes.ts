import { Routes } from '@angular/router';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';
import { RegisterComponent } from '@src/app/register/register.component';
import { CarreraComponent } from '@src/app/admin/carrera/carrera.component';
import { MesaComponent } from '@src/app/admin/mesa/mesa.component';
import { MesasComponent } from '@src/app/mesas/mesas.component';
import { UsrCarreraSubsComponent } from '@src/app/usr-carrera-subs/usr-carrera-subs.component';
import { LogsComponent } from '@src/app/logs/logs.component';
import { NewLogComponent } from '@src/app/new-log/new-log.component';
import { DetalleLogComponent } from '@src/app/detalle-log/detalle-log.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
  	  path: 'register',
  	  component: RegisterComponent,
  },
  {
  	path: 'home',
  	component: HomeComponent,
  },
  {
    path: 'logs',
    component: LogsComponent,
  },
  {
  	path: 'detalle-log/:id',
  	component: DetalleLogComponent,
  },
  {
    path: 'mesas',
  	component: MesasComponent,
  },
  {
    path: 'inscripcion',
  	component: NewLogComponent,
  },
  {
    path: 'addCarrera',
    component: UsrCarreraSubsComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: 'carrera',
        component: CarreraComponent,
        data: {
          title: 'Administración de carreras'
        }
      },
      {
        path: 'mesa',
        component: MesaComponent,
        data: {
          title: 'Administración de carreras'
        }
      }
    ]
  }
];

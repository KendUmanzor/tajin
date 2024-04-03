import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { RegistroEmpleadorComponent } from './registro-empleador/registro-empleador.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
    {path: 'register', component:RegisterComponent},
    {path: 'perfil', component:PerfilComponent},
    {path: 'landing', component:LandingComponent},
    {path:'seleccion',component:SeleccionComponent},
    {path:'busqueda',component:BusquedaComponent},
    {path:'registro/empleado',component:RegistroEmpleadoComponent},
    {path:'registro/empleador',component:RegistroEmpleadorComponent},
    {path:'configuracion',component:ConfigComponent},
    {path: '', redirectTo: '/landing', pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];

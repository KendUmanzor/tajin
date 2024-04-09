import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { RegistroEmpleadorComponent } from './registro-empleador/registro-empleador.component';
import{sidebarComponent} from './sidebar/sidebar.component';
import { autenticacionGuard } from './guard/autenticacion.guard';
import { BusquedaComponent } from './busqueda/busqueda.component';
import   {PerfilEmpresaComponent} from './perif-empresa/perfil-empresa.component';
import { MenuComponent } from './menu/menu.component';
import { CalificacionComponent } from './calificacion/calificacion.component';

export const routes: Routes = [
    {path:'menu',component:MenuComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'perfil', component:PerfilComponent
        //,canActivate:[autenticacionGuard]
    },
    {path: 'landing', component:LandingComponent},
    {path:'seleccion',component:SeleccionComponent},
    {path:'busqueda',component:BusquedaComponent},
    {path:'registro/empleado',component:RegistroEmpleadoComponent},
    {path:'registro/empleador',component:RegistroEmpleadorComponent},
    {path:'login',component:sidebarComponent},
    {path: '', redirectTo: '/landing', pathMatch:'full'},
  //{path:'**',component:PageNotFoundComponent},
    {path:'empresa',component:PerfilEmpresaComponent},
    {path:'rating',component:CalificacionComponent}
    
];

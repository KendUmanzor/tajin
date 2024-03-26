import { Component } from '@angular/core';
<<<<<<< HEAD
import { sidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'app-nav-simple',
  standalone: true,
  imports: [sidebarComponent],
  templateUrl: './nav-simple.component.html',
  styleUrl: './nav-simple.component.scss'
=======
import { BusquedaComponent } from "../busqueda/busqueda.component";

@Component({
    selector: 'app-nav-simple',
    standalone: true,
    templateUrl: './nav-simple.component.html',
    styleUrl: './nav-simple.component.scss',
    imports: []
>>>>>>> remotes/origin/master
})
export class NavSimpleComponent {

}

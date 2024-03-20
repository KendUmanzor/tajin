import { Component } from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { sidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    imports: [NavSimpleComponent,sidebarComponent]
})
export class PerfilComponent {
    datos!:FormBuilder;
    nombre:string='jane doe';
    ngOnInit(){
        this.datos=this.servicioDatos.getCompartirDatos();
        console.log(this.datos);
    }
    constructor(private servicioDatos:DatosService){
     

    }
   

}
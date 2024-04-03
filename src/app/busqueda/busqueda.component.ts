import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CommService } from '../service/comm.service';
import { NavSimpleComponent  } from "../nav-simple/nav-simple.component";

@Component({
    selector: 'app-busqueda',
    standalone: true,
    templateUrl: './busqueda.component.html',
    styleUrl: './busqueda.component.scss',
    imports: [FormsModule, NavSimpleComponent]
})
export class BusquedaComponent {
  [x: string]: any;
  busqueda= {target:''};
  mostrar:any
  constructor( private router:Router,private comm:CommService){
  }

  show() {
    this.comm.datos(this.busqueda.target).subscribe(x => this.mostrar=JSON.stringify(x,undefined,2));

    //this.mostrar=JSON.stringify(x,null,2)
    //this.mostrar= this.comm.datos().subscribe(x=> console.log(x))
    //this.srv.currentUser1.subscribe(x=> console.log(x));
    //console.log(this.srv.currentUserSubject.getValue());

  }


}
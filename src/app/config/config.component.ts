import { Component , OnInit} from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { CommService } from '../service/comm.service';
import { NavperfilComponent } from "../navperfil/navperfil.component";
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { Router } from '@angular/router';
@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent implements OnInit {
  
  nuevosDatos: { nombre: string; apellido: string; correo: string; oficio1: string; oficio2: string; }[] = [];

  datos=
    {
      nombre: 'Mario',
      apellido: 'Umanzor',
      correo: 'glaconsa2014@gmail.com',
      oficio1: 'Ingeniero en Sistemas',
      oficio2: 'Fisicoculturista'
    }
  ;
  mostrar:any
  constructor(private formBuilder: FormBuilder,private router:Router, private comm: CommService){}
  ngOnInit(): void {
  
  }

  onSubmit() {
    this.login();
    
    this.router.navigateByUrl('/perfil');
  }
  login() {
    this.nuevosDatos.push(this.datos);
    
      console.log(this.nuevosDatos);
      this.comm.enviarDatos(this.nuevosDatos);
      this.buscar(this.datos.correo)
    }
  buscar(datos:any){
    this.comm.datos(datos).subscribe((data) => {
      this.mostrar = data;
      console.log(data)})
  }
}

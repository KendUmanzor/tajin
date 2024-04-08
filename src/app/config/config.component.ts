import { Component , OnInit} from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { CommService } from '../service/comm.service';
import { NavperfilComponent } from "../navperfil/navperfil.component";
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { Router } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent implements OnInit {
  
id:any;
  datos=
    {
      nombre: '',
      apellido: '',
      oficio1: '',
      oficio2: ''
    }
  ;
  mostrar:any
  constructor(private formBuilder: FormBuilder,private router:Router, private comm: CommService){}
  ngOnInit(): void {
  
  }
  
  

  onSubmit() {

    
    this.comm.actualizarDatos(this.datos).subscribe(x=>{
      console.log(x)
    })

    this.router.navigateByUrl('/register');
  }
}

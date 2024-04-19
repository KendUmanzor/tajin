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
  selector: 'app-form-contrato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-contrato.component.html',
  styleUrl: './form-contrato.component.scss'
})
export class FormContratoComponent {
  datos=
  {
    Titulo:'',
    Ubicacion: '',
    Oficio: '',
    Hora: '',
    Descripcion: ''
  }
;
  constructor(private formBuilder: FormBuilder,private router:Router, private comm: CommService){}
  onSubmit() {

    this.comm.metercontrato(this.datos);
    console.log(this.datos);
    this.comm.vercontratos(this.datos.Oficio).subscribe(dato=>{
      console.log(dato);
    })
    }

    
  
  }

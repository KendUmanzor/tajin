import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
//import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { CommService } from '../service/comm.service';


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})

export class RegisterComponent{
  email:any;
  password:any;
  submitted = false;
  mostrar:any;
  data:any;
  constructor(private formBuilder: FormBuilder,private router:Router,private comm:CommService){}
  
  
onsubmit(){
  
  this.login(this.email);
  //console.log(this.mostrar)
  this.router.navigateByUrl('perfil/inicio');
}
login(user:any) {
  
  this.comm.datos(user).subscribe((data) => {
    this.mostrar = data[0].ID;
    this.comm.guardarID(this.mostrar),
    this.comm.guardarDatos(data);
  });
  //this.comm.guardarID(this.mostrar);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
    selector: 'app-registro-empleado',
    standalone: true,
    templateUrl: './registro-empleado.component.html',
    styleUrl: './registro-empleado.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})
export class RegistroEmpleadoComponent implements OnInit {
    submitted = false;
    registerForm!:FormGroup
    constructor(private formBuilder: FormBuilder, private router:Router, private  servicioDatos:DatosService){}
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            nombre:[''],
            apellido:[''],
            usuario:[''],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(6)]]
    });
    }
    
ver(){
    console.log( this.registerForm.invalid)
    }
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    if (this.f['password'].errors) {
        console.log(this.f['password'].errors);
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    console.log(this.registerForm.value);
    this.comm.registrarte(this.registerForm)
    
    this.router.navigateByUrl('/perfil');
};

    enviarDatos(){
        const datos:FormBuilder=this.registerForm.value;
        this.servicioDatos.setCompartirDatos(datos,'datos');

    }
   
}




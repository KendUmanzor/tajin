import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})

export class RegisterComponent implements OnInit {
  //correo:any='';
  //password:any='';
  submitted = false;
  registerForm!:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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
  location.href="perfil";
  alert('Datos capturados\n\n' + JSON.stringify(this.registerForm.value))
}
}

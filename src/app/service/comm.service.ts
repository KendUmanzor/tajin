import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  
  private datosSubject = new BehaviorSubject<any>(null);
  datos$ = this.datosSubject.asObservable();
  constructor(private http: HttpClient) { }
  datos(correo:string): Observable<any> {
  
    return this.http.post('http://localhost:3200',{dato: correo })
  }
  
  login(user: any): Observable<any> {
    return this.http.post('http://localhost:3200', user);
  }

  guardarDatos(datos: any[]) {
    this.datosSubject.next(datos);
  }
  actualizarDatos(nuevosDatos: { nombre: string; apellido: string; oficio1: string; oficio2: string; }[]) {
    this.datosSubject.next(nuevosDatos);
  }
  enviarDatos(datos: any) {
    return this.http.post<any>('http://localhost:3200', datos);
  }
  }
  

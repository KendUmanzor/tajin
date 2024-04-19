import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  
  private datosSubject = new BehaviorSubject<any>(null);
  datos$ = this.datosSubject.asObservable();
  ID=''
  constructor(private http: HttpClient) { }
  datos(correo:string): Observable<any> {
  
    return this.http.post('http://localhost:3200/buscar',{dato: correo })
  };
  actualizarDatos(nuevosDatos:any) {
    return this.http.post('http://localhost:3200/mod',{nuevosDatos})
  };
  metercontrato(meter:any) {
    return this.http.post('http://localhost:3200/ceter',{meter})
  };
  vercontratos(oficio:any): Observable<any> {
  
    return this.http.post('http://localhost:3200/buscar/contratos',{oficio})
  };
  registrarte(nuevosDatos:any){
    return this.http.post('http://localhost:3200/registrarte',{nuevosDatos})
  };
  guardarDatos(datos: any[]) {

    this.datosSubject.next(datos);
  }
  guardarID(id:any){
    this.ID=id
    

  }
}
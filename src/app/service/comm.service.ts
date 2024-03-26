import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor(private http: HttpClient) { }
  datos(name:string): Observable<any> {
    console.log(name);
    return this.http.post('http://localhost:3200',{dato: name })
  }
}

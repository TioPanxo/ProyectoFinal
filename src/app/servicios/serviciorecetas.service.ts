import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiciorecetasService {

  public JsonURL='assets/recetas.json';
  constructor(private http:HttpClient) {
    
  }

  public getJSON():Observable<any>{
    return this.http.get(this.JsonURL);
  }
}

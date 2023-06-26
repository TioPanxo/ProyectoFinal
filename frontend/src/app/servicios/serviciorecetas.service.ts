import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recetas } from '../interfaces/recetas';

@Injectable({
  providedIn: 'root'
})

export class ServiciorecetasService {

  //public JsonURL='assets/recetas.json';
  public getRec = 'http://localhost:3000/getRecetas'
  public putRec = 'http://localhost:3000/aniadirReceta'
  public delrec = 'http://localhost:3000/deleteRec'


  constructor(private http:HttpClient) {
    
  }

  //getrecetas
  getRecetas(){
    return this.http.get(this.getRec);
  }

  //addReceta
  addReceta(receta:Recetas){
    return this.http.put(this.putRec,receta);
  }

  //deletereceta
  deleteReceta(id:string){
    return this.http.delete(this.delrec+'/'+id);
  }





  //public getJSON():Observable<any>{
    //return this.http.get(this.JsonURL);
  //}
}

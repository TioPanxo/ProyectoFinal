import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public getUsers = 'http://localhost:3000/getUsers'
  public getUser = 'http://localhost:3000/getUser'
  public registro = 'http://localhost:3000/registro'
  public delete = 'http://localhost:3000/delete'


  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get(this.getUsers);
  }

  inicioDeSesion(usuario:Usuarios): Observable<any>{
    return this.http.post(this.getUser,usuario);
  }

  registroApp(usuario:Usuarios){
    return this.http.put(this.registro,usuario);
  }
  
  deleteUsuario(id:string){
    return this.http.delete(this.delete+'/'+id)
  }
}

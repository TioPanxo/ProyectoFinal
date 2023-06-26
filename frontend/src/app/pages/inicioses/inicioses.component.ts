import { Component, OnInit } from '@angular/core';
import {AbstractControl, Form, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-inicioses',
  templateUrl: './inicioses.component.html',
  styleUrls: ['./inicioses.component.scss']
})
export class IniciosesComponent implements OnInit {

    formulario!:FormGroup;
    email:AbstractControl;
    password:AbstractControl;

    usuario:Usuarios={
        id_Usuario:0,
        name:'',
        alias:'',
        email:'',
        password:'',
        rol:''
    }

    constructor(private form:FormBuilder,private servicioUsuarios:UsuariosService,private router:Router) {
        this.formulario=this.form.group({
            email:['',[Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{0,30}$/)]]
        });
        this.email= this.formulario.controls['email'];  
        this.password=this.formulario.controls['password'];
    }

    ngOnInit(): void {
    }
    
    submit(){
        if(this.formulario.invalid){
            Object.values(this.formulario.controls).forEach(control=>{
                control.markAllAsTouched();
            });
            return;
        }else{
            console.log(this.usuario);

            this.servicioUsuarios.inicioDeSesion(this.usuario).subscribe();
            this.router.navigate(['/areauser'])
        }
    }

}



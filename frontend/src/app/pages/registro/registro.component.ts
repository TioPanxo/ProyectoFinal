import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { UsuariosService } from '../../servicios/usuarios.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})


export class RegistroComponent {
    formulario : FormGroup;
    name:AbstractControl;
    alias:AbstractControl;
    email: AbstractControl;
    password:AbstractControl;

    usuario:Usuarios={
        id_Usuario:0,
        name:'',
        alias:'',
        email:'',
        password:'',
        rol:''
    }
  
    constructor(private toastr: ToastrService,private form:FormBuilder, private servicioUsuarios:UsuariosService,private router:Router) {
        this.formulario=this.form.group({
            name:['',[Validators.required]],
            alias:['',[Validators.required]],
            email:['',[Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{0,30}$/)]]
        });
        this.name=this.formulario.controls['name'];
        this.alias=this.formulario.controls['alias'];
        this.email= this.formulario.controls['email'];  
        this.password=this.formulario.controls['password'];
    }
  
    ngOnInit(): void {

    }
  
    registro(){
        if(this.formulario.invalid){
            Object.values(this.formulario.controls).forEach(control=>{
                control.markAllAsTouched();
            });
            return;
        }
        else{
            console.log(this.usuario)
            this.servicioUsuarios.registroApp(this.usuario).subscribe(data=>{
                this.toastr.error('Se registro el usuario con exito','Usuario Registrado'),
                this.router.navigate(['/inicioses'])
            });
            
        }

        
    }
  
}

import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  
    constructor(private form:FormBuilder) {
        this.formulario=this.form.group({
            name:['',[Validators.required]],
            alias:['',[Validators.required]],
            email:['',[Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(8)]]
        });
        this.name=this.formulario.controls['name'];
        this.alias=this.formulario.controls['alias'];
        this.email= this.formulario.controls['email'];  
        this.password=this.formulario.controls['password'];
    }
  
    ngOnInit(): void {

    }
  
    inicioSesion(){
        if(this.formulario.invalid){
            Object.values(this.formulario.controls).forEach(control=>{
                control.markAllAsTouched();
            });
            return;
        }

        
    }
  
}

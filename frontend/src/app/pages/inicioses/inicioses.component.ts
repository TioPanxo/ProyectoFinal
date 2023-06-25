import { Component, OnInit } from '@angular/core';
import {AbstractControl, Form, FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicioses',
  templateUrl: './inicioses.component.html',
  styleUrls: ['./inicioses.component.scss']
})
export class IniciosesComponent implements OnInit {

    formulario!:FormGroup;
    email:AbstractControl;
    password:AbstractControl;

    constructor(private form:FormBuilder) {
        this.formulario=this.form.group({
            email:['',[Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(8)]]
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
        }
    }

}



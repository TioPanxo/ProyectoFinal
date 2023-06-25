import { Component, OnInit } from '@angular/core';
import {Recetas} from '../../interfaces/recetas';
import {ServiciorecetasService} from '../../servicios/serviciorecetas.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent implements OnInit{

    datos:Array<Recetas>=[];

    constructor(private ServicioRecetas:ServiciorecetasService){

    }

    ngOnInit(): void{
        this.ServicioRecetas.getJSON().subscribe(data=>{
            for(let i=0;i<data.length;i++)
                this.datos.push(data[i]);
              
        
            console.log(this.datos);
        });
    }
}

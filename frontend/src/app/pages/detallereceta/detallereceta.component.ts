import { Component, OnInit } from '@angular/core';
import { Recetas } from '../../interfaces/recetas';
import { ServiciorecetasService } from '../../servicios/serviciorecetas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallereceta',
  templateUrl: './detallereceta.component.html',
  styleUrls: ['./detallereceta.component.scss']
})

export class DetallerecetaComponent implements OnInit{
  ruta2:any;
  id:number=0;
  datos:Array<Recetas>=[];
  detalleReceta!: Recetas;

  constructor(private ServicioRecetas:ServiciorecetasService, private ruta:ActivatedRoute){

  }

  ngOnInit(): void{

    /*this.ServicioRecetas.getJSON().subscribe(data=>{
      for(let i=0;i<data.length;i++)
        this.datos.push(data[i]);
      
      console.log(this.datos);
      this.ruta2=this.ruta.params.subscribe(parametros=>{
        this.id=parametros['id'];
        this.detalleReceta=this.datos[this.id];
        console.log(this.detalleReceta);
      });
    });*/

    this.ServicioRecetas.getRecetas().subscribe(
      res=>{
          //console.log(res);
          this.datos=<any>res;
          this.ruta2=this.ruta.params.subscribe(parametros=>{
            this.id=parametros['id'];
            this.detalleReceta=this.datos[this.id];
            console.log(this.detalleReceta);
          });
      },
      err=> console.log(err)
  );
  }
}

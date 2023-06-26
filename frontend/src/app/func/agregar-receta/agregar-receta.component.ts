import { Component , OnInit} from '@angular/core';
import { ServiciorecetasService} from '../../servicios/serviciorecetas.service';
import { Recetas } from '../../interfaces/recetas'
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.scss']
})

export class AgregarRecetaComponent {

  receta: Recetas={
    id_Receta:0,
    nombre:'',
    src:'',
    ingredientes:'',
    procedimientos:'',
  }

  constructor(private RecetasService:ServiciorecetasService,private router:Router){}

  ngOnInit():void{

  }

  agregarReceta(){
    delete this.receta.id_Receta;

    this.RecetasService.addReceta(this.receta).subscribe();
    this.router.navigate(['/areauser'])
  }
}

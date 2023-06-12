import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { AreauserComponent } from './pages/areauser/areauser.component';
import { CambioclimComponent } from './pages/cambioclim/cambioclim.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { IniciosesComponent } from './pages/inicioses/inicioses.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DetallerecetaComponent } from './pages/detallereceta/detallereceta.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"alimentacion",component:AlimentacionComponent},
  {path:"cambioclim",component:CambioclimComponent},
  {path:"recetas",component:RecetasComponent},
  {path:"comunidad",component:ComunidadComponent},
  {path:"inicioses",component:IniciosesComponent},
  {path:"registro",component:RegistroComponent},
  {path:"areauser",component:AreauserComponent},
  {path:"detalle/:id",component:DetallerecetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

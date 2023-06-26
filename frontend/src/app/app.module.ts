import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { CambioclimComponent } from './pages/cambioclim/cambioclim.component';
import { AreauserComponent } from './pages/areauser/areauser.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { IniciosesComponent } from './pages/inicioses/inicioses.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import {AgregarRecetaComponent} from './func/agregar-receta/agregar-receta.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BarranavuserComponent } from './componentes/barranavuser/barranavuser.component';
import { DetallerecetaComponent } from './pages/detallereceta/detallereceta.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    AlimentacionComponent,
    CambioclimComponent,
    AreauserComponent,
    ComunidadComponent,
    IniciosesComponent,
    RecetasComponent,
    RegistroComponent,
    CarruselComponent,
    BarranavuserComponent,
    DetallerecetaComponent,
    AgregarRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

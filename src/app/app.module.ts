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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

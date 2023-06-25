import { Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  selector: 'app-cambioclim',
  templateUrl: './cambioclim.component.html',
  styleUrls: ['./cambioclim.component.scss']
})
export class CambioclimComponent implements OnInit{
  videos=[
    {
      video: 'c8c0sYQ87m8',
      nombre: '#Lemon',
      desc: 'La Fundación Reina Sofía presenta #Lemon, el corto enmarcado en la nueva campaña de concienciación medioambiental de esta entidad, centrándose en el problema de la contaminación marina por plásticos.'
    },
    {
      video: 'F1xS_kCuugQ',
      nombre: '2050',
      desc: '2050 es un cortometraje que critica el comportamiento actual del ser humano respecto al cambio climático y la contaminación. Es un cortometraje que reflexiona suponiendo el estado del planeta en 2050.'
    },
    {
      video: 'hDwAGfecLJ4',
      nombre: 'Equilibrium',
      desc: 'Corto ganador en el día mundial del medio ambiente. Nos invita a tener un comportamiento responsable con nuestro medio ambiente.'
    }
  ];


  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
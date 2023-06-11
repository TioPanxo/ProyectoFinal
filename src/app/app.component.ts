import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader= true;
  showFooter= true;
  showNavUser= false;

  constructor(private router:Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url == '/inicioses' || val.url == '/registro'){
            this.showHeader=false;
            this.showFooter=false;
            this.showNavUser=false;
          }
          else{
            if(val.url == '/areauser'){
              this.showNavUser=true;
              this.showHeader=false;
            }
            else{
              this.showNavUser=false;
              this.showHeader = true;
              this.showFooter=true;
            }
          }
        }
      }
    )
  }
}

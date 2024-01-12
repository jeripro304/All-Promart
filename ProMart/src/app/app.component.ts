import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecart';
  isHome:boolean ;


  constructor(){
   this.isHome = true;
  }




  ChangeHome(){
    this.isHome = false;
  }
  
}

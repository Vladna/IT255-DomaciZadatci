import { Component } from '@angular/core';
import {Soba} from './soba/soba.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sobe:Array<Soba>=[];
 
constructor(){}
  dodajSobu(brSobe: HTMLInputElement, brKreveta: HTMLInputElement,cena:HTMLInputElement): boolean {
    this.sobe.push(new Soba (Number( brSobe.value) , Number(brKreveta.value) ,Number(cena.value )  ));
    brSobe.value='';
    brKreveta.value='';
    cena.value='';
    return false;
  }
  sortMaxCena(maksimalnaCena:HTMLInputElement){
  

  }

}

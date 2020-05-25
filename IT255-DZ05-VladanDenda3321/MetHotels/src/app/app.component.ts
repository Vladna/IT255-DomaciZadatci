import { Component ,Input } from '@angular/core';
import {Soba} from './soba/soba.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input () sobe: Soba[]=[] ;
 
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
  public izbrisiSobu(sobe: Soba) {
    this.sobe = this.sobe.filter(item => {
      return item.brSobe !== sobe.brSobe
    })
  }
  public izmeniSobu(sobe: Soba) {
    let index = this.sobe.findIndex(i => i.brSobe === sobe.brSobe);
    
    this.sobe[index].brSobe =Math.round((Math.random()*100)+1);
  }
  
}

import { Component, Input } from '@angular/core';
import { Soba } from './soba/soba.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() sobe: Soba[] = [];
//izmena
  constructor() { }
  dodajSobu(brSobe: HTMLInputElement, brKreveta: HTMLInputElement, cena: HTMLInputElement): boolean {
    this.sobe.push(new Soba(String(brSobe.value), Number(brKreveta.value), Number(cena.value)));
    brSobe.value = '';
    brKreveta.value = '';
    cena.value = '';
    return false;
  }


  sortMaxCena(maksimalnaCena: HTMLInputElement) {


  }
  public izbrisiSobu(sobe: Soba) {
    this.sobe = this.sobe.filter(item => {
      return item.brSobe !== sobe.brSobe
    })
  }
  public izmeniSobu(sobe: Soba) {
   let index = this.sobe.findIndex(i => i.brSobe === sobe.brSobe);

    this.sobe[index].cena = Math.round((Math.random() * 100) + 1);
  }


  form = new FormGroup({
    brSobeForma: new FormControl('',  [Validators.required,Validators.minLength(6)  ]),
    brKrevetaForma: new FormControl('', Validators.required  ),
    cenaForma: new FormControl('', Validators.required)
  })
  
  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }
}

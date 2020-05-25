import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Soba} from '../soba/soba.model';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dodaj-sobu',
  templateUrl: './dodaj-sobu.component.html',
  styleUrls: ['./dodaj-sobu.component.css']
})
export class DodajSobuComponent implements OnInit {
  @Output() roomToAdd: EventEmitter<Soba>;
  public SobaForm: FormGroup;
  constructor() { 
   this.roomToAdd=new EventEmitter();
  }

  ngOnInit() {
  }
  public submitForm() {
    let brojsobe = this.SobaForm.get('brojsobe').value;
    let brojkreveta = this.SobaForm.get('brojkreveta').value;
    let cena = this.SobaForm.get('cena').value;
    let video = new Soba(brojsobe, brojkreveta, cena);
    this.roomToAdd.emit(video);
  }
}

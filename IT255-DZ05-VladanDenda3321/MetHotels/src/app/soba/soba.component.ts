import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { Soba } from './soba.model';
@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()soba:Soba;
  
  constructor() { }

  ngOnInit() {
  }

}

import {  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild('heading', {static: true}) header: ElementRef;
@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

constructor() {
  
}

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges ');
  console.log(changes);
}

ngOnInit() {
  console.log('ngOnInit ');
  console.log('Text Content: ' + this.header.nativeElement.textContent);
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
}

ngDoCheck() {
  console.log('ngDoCheck ');
}

ngAfterContentInit() {
  console.log('ngAfterContentInit ');
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
}

ngAfterContentChecked() {
  console.log('ngAfterContentChecked ');
}

ngAfterViewInit() {
  console.log('ngAfterViewInit ');
  console.log('Text Content: ' + this.header.nativeElement.textContent);
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked ');
}

ngOnDestroy() {
  console.log('ngOnDestroy ');
}

}

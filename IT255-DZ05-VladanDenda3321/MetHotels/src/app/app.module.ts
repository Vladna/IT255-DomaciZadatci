import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { MaxcenaPipe } from './maxcena.pipe';
import { from } from 'rxjs';
import { DodajSobuComponent } from './dodaj-sobu/dodaj-sobu.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    MaxcenaPipe,
    DodajSobuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

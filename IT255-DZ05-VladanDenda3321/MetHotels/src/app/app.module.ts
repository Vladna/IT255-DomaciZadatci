import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { MaxcenaPipe } from './maxcena.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    MaxcenaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

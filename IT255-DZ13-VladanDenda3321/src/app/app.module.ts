import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodajServerComponent } from './dodaj-server/dodaj-server.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './directive-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DodajServerComponent,
    ServerElementComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DodajvideoComponent } from './dodajvideo/dodajvideo.component';
import { VideoComponent } from './video/video.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DodajvideoComponent,
    VideoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

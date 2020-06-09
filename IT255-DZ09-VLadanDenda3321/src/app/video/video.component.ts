import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../video.model';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


  @Output() videoToDelete: EventEmitter<Video> = new EventEmitter();;
  @Output() updateVideo: EventEmitter<Video> = new EventEmitter();;
  
  public link: any;
  @Input() video: any;
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.embedUrl();
  }
  public embedUrl() {
    this.link = this._sanitizer.bypassSecurityTrustResourceUrl(this.video.link);
  }


  public deleteVideo(): void {
    this.videoToDelete.emit(this.video);
  }
  public changeContent(): void {
    this.updateVideo.emit(this.video);
  }

}
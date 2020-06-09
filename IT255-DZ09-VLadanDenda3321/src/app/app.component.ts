import { Component } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'it255';
  public videos: Video[] = [];
  private _links: string[] = [
    //'YiUQE5bJKFU',
   // 'B32yjbCSVpU',
    '6yXJtOdNnNk',
    '2AMu-G51yTY',
    'P8JEm4d6Wu4',
    'qRy7c851C2A',
    'ISDEoGbUZ4g',
    '3ryQt247xXk',
    'rLHfYf3qeG0',
    'mlUMgZGFCtw',
    '6yXJtOdNnNk','5qap5aO4i9A','VslI_7VEhck'
  ];

  constructor(){
    for(let i = 0; i < 8; i++) {
      this.videos.push(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[i], this._generateRandomLength()))
    }
  }

  private _generateString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

 private _generateRandomLength(): number {
    return Math.floor(Math.random() * 240);
  }

  public deleteVideo(video: Video) {
    this.videos = this.videos.filter(item => {
      return item.title !== video.title
    })
  }

  public sort(type: string) {
    this.videos.sort((a, b) => {
      return type == 'asc' ?  a.length - b.length : b.length - a.length;
    });
  }

  public updateVideo(video: Video) {
    let index = this.videos.findIndex(i => i.title === video.title);
    this.videos[index].title = this._generateString(6);
    this.videos[index].description = this._generateString(50);
  }

  public addVideo() {
    this.videos.unshift(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[Math.floor(Math.random() * this._links.length - 1)], this._generateRandomLength()))
  }

}
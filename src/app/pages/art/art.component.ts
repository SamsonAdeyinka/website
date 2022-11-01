import { Component, OnInit } from '@angular/core';
import { Gallery, Graphic, Photos } from './art-images';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  images = Gallery
  graphic = Graphic
  photos = Photos

  constructor() {
    console.log(this.images)
   }

  ngOnInit(): void {
  }

}

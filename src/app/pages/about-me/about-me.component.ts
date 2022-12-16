import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  gfg: any[] = [];

  ngOnInit() {

    this.gfg = [
      {
        tutorialName: 'DSA Self Paced',
      },
      {
        tutorialName: 'System Design',
      },
      {
        tutorialName: 'C++ STL',
      },
      {
        tutorialName: 'Competitive Programming',
      },
    ];
  }

}

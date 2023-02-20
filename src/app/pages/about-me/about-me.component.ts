import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  employ: any[] = [];

  ngOnInit() {

    this.employ = [
      {
        year: '2021',
        company: 'Transperfect',
        role: 'Localization Engineer'
      },
      {
        year: '2019',
        company: 'QA Consulting',
        role: 'Localization Engineer'
      },
      {
        year: '2018',
        company: 'Tearfund',
        role: 'Localization Engineer'
      },
      {
        year: '2018',
        company: 'RPPtv.com',
        role: 'Localization Engineer'
      },
    ];
  }

}

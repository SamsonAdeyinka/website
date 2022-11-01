import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  // @Input() posts: any;
  @Input() showImage = false;

  constructor() { }
  
  posts = [
    {
      title: "Card 1",
      content: "Hello World. My name is Samson Adeyinka",
      image: "../../../assets/images/simon-berger-boyXZfqpwpU-unsplash.jpg"
    },
    {
      title: "Card 2",
      content: "Hello World. My name is John Doe",
      image: "../../../assets/images/simon-berger-boyXZfqpwpU-unsplash.jpg"
    },
    {
      title: "Card 3",
      content: "Hello World. My name is Jane Doe",
      image: "../../../assets/images/simon-berger-boyXZfqpwpU-unsplash.jpg"
    }
  ]

  ngOnInit(): void {
  }

}

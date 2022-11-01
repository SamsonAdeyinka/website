import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OwlOptions } from 'ngx-owl-carousel-o';

gsap.registerPlugin(ScrollTrigger)
var path = '../../../assets/images/'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [
    {
      title: "Card 1",
      content: "Hello World. My name is Samson Adeyinka"
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

  images = [
    path + 'simon-berger-boyXZfqpwpU-unsplash.jpg',
    path + 'jc-gellidon-Khqmo4T-rs0-unsplash.jpg',
    path + 'simon-berger-boyXZfqpwpU-unsplash.jpg',
    path + 'simon-berger-boyXZfqpwpU-unsplash.jpg',
    path + 'spencer-davis-ONVA6s03hg8-unsplash.jpg',
    path + 'surface-aWnQDA39C_g-unsplash.jpg',
    path + 'windows-aeVCU-vit3o-unsplash.jpg'
  ];

  // @ViewChild('secondSection', { static: true }) secondSection: ElementRef<HTMLDivElement>;
  // @ViewChild('imageOne', { static: true }) imageOne: ElementRef<HTMLDivElement>;
  // @ViewChild('imageTwo', { static: true }) imageTwo: ElementRef<HTMLDivElement>;
  // @ViewChild('imageThree', { static: true }) imageThree: ElementRef<HTMLDivElement>;
  // @ViewChild('imageFour', { static: true }) imageFour: ElementRef<HTMLDivElement>;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 10,
    autoplay: true,
    autoplaySpeed: 300,
    autoplayHoverPause: false,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
    // this.initScrollAnimation()
    // this.initialAnimation()
  }

  // initScrollAnimation(): void {
  //   gsap.to(this.imageTwo.nativeElement, {
  //     scrollTrigger: {
  //       trigger: this.imageTwo.nativeElement,
  //       scrub: true,
  //       start: '50% 75%',
  //       // markers: true
  //     },
  //     duration: 1.1,
  //     scale: 1.2,
  //   })
  //   gsap.to(this.imageThree.nativeElement, {
  //     scrollTrigger: {
  //       trigger: this.imageThree.nativeElement,
  //       scrub: true,
  //       start: '50% 75%',
  //       // markers: true
  //     },
  //     duration: 1.1,
  //     scale: 1.2,
  //   })
  //   gsap.to(this.imageFour.nativeElement, {
  //     scrollTrigger: {
  //       trigger: this.imageFour.nativeElement,
  //       scrub: true,
  //       start: '50% 75%',
  //       // markers: true
  //     },
  //     duration: 1.1,
  //     scale: 1.2,
  //   })
  //   gsap.to(this.imageOne.nativeElement, {
  //     scrollTrigger: {
  //       trigger: this.imageOne.nativeElement,
  //       scrub: true,
  //       start: '50% 75%',
  //       // markers: true
  //     },
  //     duration: 1.1,
  //     scale: 1.2,
  //   })
  //   // gsap.to(this.document.querySelector('.header-1'), {
  //   //   scrollTrigger: {
  //   //     trigger: this.document.querySelector('.header-1'),
  //   //     scrub: true,
  //   //     start: '50% 40%',
  //   //     // markers: true,
  //   //   },
  //   //   color: '#1A1A1A',
  //   //   duration: 1.5,
  //   // })
  // }

  // initialAnimation(): void {
  //   gsap.from(this.imageOne.nativeElement, {
  //     duration: 0.5,
  //     opacity: 0,
  //     y: -20,
  //     stagger: 0.2,
  //     delay: 0.5,
  //   })
  // }

}

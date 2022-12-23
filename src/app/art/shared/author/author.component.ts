import {Component, ViewChild} from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent{
  // @ts-ignore
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;
  slides = [
    {img: 'assets/images/artist1.jpg',
    name: 'Bob Ross (the goat)',
    quote: '“There’s nothing wrong with having a tree as a friend.”'},
    {img: '../assets/images/artist2.jpg',
      name: 'Gustav Klimt',
      quote: '“Art is a line around your thoughts.”'},
    {img: '../assets/images/artist3.jpg',
      name: 'Michelangelo',
      quote: '“My soul can find no staircase to Heaven unless it be through Earth\'s loveliness.”'},
    {img: '../assets/images/artist4.jpg',
      name: 'Sierra Thoreau',
      quote: '“It’s not what you look at that matters, it’s what you see.”'},
    {img: '../assets/images/artist5.jpg',
      name: 'Anais Nin',
      quote: '“Artists are just children who refuse to put down their crayons.”'},
    {img: '../assets/images/artist6.webp',
      name: 'Darius Lo',
      quote: '“While drawing I discover what I really want to say.”'},
  ];
  slideConfig1 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1500,
    responsive: [
      {
        breakpoint: 992,
        slidesToShow: 3
      }
    ]
  };

  slideConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 1000,
    speed: 500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      }
    ]
  };
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }
}

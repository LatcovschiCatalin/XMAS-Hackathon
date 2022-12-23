import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  // @ts-ignore
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;
  slides = [
    {img: '../assets/images/art1.jpeg'},
    {img: '../assets/images/art2.jpeg'},
    {img: '../assets/images/art3.jpeg'},
    {img: '../assets/images/art4.jpeg'},
    {img: '../assets/images/art5.jpeg'},
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 500,
    responsive : [
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
},
{
  breakpoint: 600,
    settings: {
  slidesToShow: 1,
    slidesToScroll: 1,
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


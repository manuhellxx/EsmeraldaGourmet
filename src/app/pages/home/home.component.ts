import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  currentSlide = 0;

  slides = [

    {
      image:'assets/banner1.jpg'
    },

    {
      image:'assets/banner2.jpg'
    },

    {
      image:'assets/banner3.jpg'
    }

  ];

  ngOnInit(): void {

    setInterval(() => {

      this.nextSlide();

    }, 5000);

  }

  nextSlide() {

    this.currentSlide = (this.currentSlide + 1) % this.slides.length;

  }
}

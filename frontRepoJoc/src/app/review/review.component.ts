import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from './Review'
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  
  review: Review[] = [];

  constructor(private reviewService: ReviewService, private router: Router) {}

  ngOnInit(): void {
    this.reviewService.findAll().subscribe(
      (reviewIterable: Iterable<Review>) => {
        // converteix un iterable a un array
        this.review = Array.from(reviewIterable);
      },
      error => {
        console.error('Error al obtenir dades de la review:', error);
      }
    );
  }
}


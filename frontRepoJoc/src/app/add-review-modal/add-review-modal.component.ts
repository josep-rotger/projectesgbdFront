import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../review/Review';
import { Router } from '@angular/router';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { AddReviewModalService } from './add-review-modal.service';
import { ReviewService } from '../review/review.service';
@Component({
  selector: 'app-add-review-modal',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.css'],
  template: 'passed in {{ data.name }}',
})
export class AddReviewModalComponent {
  constructor(@Inject(DIALOG_DATA) public data: {id: string}, public dialogRef: MatDialogRef<AddReviewModalComponent>, private addreviewService: AddReviewModalService, private reviewService: ReviewService) {}
  addedreview: Review = new Review();
  userid:string | undefined;
  fastar = faStar;
  selectedStars: number = 0;
  stars = [
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: false },
    { value: 4, active: false },
    { value: 5, active: false }
  ];
  
  toggleStar(star: any): void {
    const starIndex = this.stars.indexOf(star);
    
    // desmarca les estrelles que hi havia abans
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].active = false;
  
    }

    // marca les estrelles
    for (let i = 0; i <= starIndex; i++) {
      this.stars[i].active = !this.stars[i].active;
    }

  }

  saveReview(formData: any): void {
    // Process and save the review data (comment and rating)
    // For example, you can send it to an API or perform any other actions.
    this.userid = localStorage.getItem("username") || '';
    const activeStarsCount = this.stars.filter(star => star.active).length;
    this.addedreview ={
      id:"",
      author: this.userid,
      gameId: this.data.id,
      comment: formData.comment,
      like: 0,
      rating: activeStarsCount,
    };
    
    this.addreviewService.addGameReview(this.data.id, this.addedreview);
    window.location.reload();
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

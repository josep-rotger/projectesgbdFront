import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../review/Review';
import { Router } from '@angular/router';
import { DIALOG_DATA } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-review-modal',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.css'],
  template: 'passed in {{ data.name }}',
})
export class AddReviewModalComponent { 
  constructor(@Inject(DIALOG_DATA) public data: {id: any}, public dialogRef: MatDialogRef<AddReviewModalComponent>) {}
  addedreview: Review = new Review();
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
    console.log(this.data.id);
    console.log('Review Data:', formData);
    const activeStarsCount = this.stars.filter(star => star.active).length;
    console.log('Number of active stars:', activeStarsCount);
    
    this.addedreview ={
      id: 1, 
      author: 'Joan',
      gameId: this.data.id,
      comment: formData,
      like: 0,
      rating: activeStarsCount,
    };

    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

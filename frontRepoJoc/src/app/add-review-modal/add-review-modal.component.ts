import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-review-modal',
  templateUrl: './add-review-modal.component.html',
  styleUrls: ['./add-review-modal.component.css']
})
export class AddReviewModalComponent {
  constructor(public dialogRef: MatDialogRef<AddReviewModalComponent>) {}
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
    console.log('Review Data:', formData);

    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewModalComponent } from './add-review-modal.component';
@Injectable({
  providedIn: 'root'
})
export class AddReviewModalService {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(AddReviewModalComponent);
  }
}

import { TestBed } from '@angular/core/testing';

import { AddReviewModalService } from './add-review-modal.service';

describe('AddReviewModalService', () => {
  let service: AddReviewModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddReviewModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

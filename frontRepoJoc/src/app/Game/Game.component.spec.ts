import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JocComponent } from './Game.component';

describe('JocComponent', () => {
  let component: JocComponent;
  let fixture: ComponentFixture<JocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JocComponent]
    });
    fixture = TestBed.createComponent(JocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

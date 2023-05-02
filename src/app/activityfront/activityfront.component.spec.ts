import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityfrontComponent } from './activityfront.component';

describe('ActivityfrontComponent', () => {
  let component: ActivityfrontComponent;
  let fixture: ComponentFixture<ActivityfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

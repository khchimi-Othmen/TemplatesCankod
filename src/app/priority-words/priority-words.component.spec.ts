import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityWordsComponent } from './priority-words.component';

describe('PriorityWordsComponent', () => {
  let component: PriorityWordsComponent;
  let fixture: ComponentFixture<PriorityWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

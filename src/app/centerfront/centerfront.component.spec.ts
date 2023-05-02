import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterfrontComponent } from './centerfront.component';

describe('CenterfrontComponent', () => {
  let component: CenterfrontComponent;
  let fixture: ComponentFixture<CenterfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

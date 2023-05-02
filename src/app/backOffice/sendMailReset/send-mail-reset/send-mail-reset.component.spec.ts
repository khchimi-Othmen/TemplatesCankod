import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailResetComponent } from './send-mail-reset.component';

describe('SendMailResetComponent', () => {
  let component: SendMailResetComponent;
  let fixture: ComponentFixture<SendMailResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMailResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

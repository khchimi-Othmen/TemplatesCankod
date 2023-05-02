import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTransportComponent } from './back-transport.component';

describe('BackTransportComponent', () => {
  let component: BackTransportComponent;
  let fixture: ComponentFixture<BackTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

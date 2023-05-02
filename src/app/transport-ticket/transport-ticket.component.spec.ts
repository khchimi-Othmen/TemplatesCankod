import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTicketComponent } from './transport-ticket.component';

describe('TransportTicketComponent', () => {
  let component: TransportTicketComponent;
  let fixture: ComponentFixture<TransportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeliveryComponent } from './liste-delivery.component';

describe('ListeDeliveryComponent', () => {
  let component: ListeDeliveryComponent;
  let fixture: ComponentFixture<ListeDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

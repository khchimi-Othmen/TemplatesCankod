import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  idReservation:any;
  idcenter:any;
  reservations:any;
  constructor(private servicer:ReservationService) {}
  ngOnInit(): void {
    let resp= this.servicer.getAllReservations();
    resp.subscribe((data)=>this.reservations=data);
  }
  ReservationPrice(){
  
    this.servicer.TotalPrice(this.idcenter,this.idReservation)
    .subscribe(res => { 
      console.log('Reservation Price calculated successfully:', res);
      // TODO: handle success
    }, error => {
      console.error('Error in the calculation of Price reservation:', error);
      // TODO: handle error
    });
  }
}

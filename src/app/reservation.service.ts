import { Reservation } from './model/Reservation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
constructor(private http: HttpClient) { }
  
  createReservation(reservation: Reservation  , idcenter:number){
    return this.http.post("http://localhost:8075/Reservation/add-Reservation/"+idcenter,reservation)
  }
  TotalPrice(centerId:number , ReservationId:number){
    return this.http.post(`http://localhost:8075/Reservation/ReservationPrice/${centerId}/${ReservationId}`,null);
  }
  getAllReservations(){
    return this.http.get("http://localhost:8075/Reservation/retrieve-all-Reservations");
  }
}

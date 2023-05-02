import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TourReservation } from 'src/Model/TouResevation';

@Injectable({
  providedIn: 'root'
})
export class ReservationTourService {

  constructor(private http: HttpClient) { }

  
  reserverTours(iduser:number,idTour:number,nbAreserver:number){
    return this.http.put(`http://localhost:8075/TourReservation/reserver/${iduser}/${idTour}/${nbAreserver}`,null);
  }


  addTours(p:TourReservation){
    return this.http.post<TourReservation>(" http://localhost:8075/TourReservation/add-TourReservation",p);
  }


  

}

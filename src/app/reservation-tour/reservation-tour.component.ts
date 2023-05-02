import { GuideServiceService } from './../guide-service.service';

import { Component, OnInit } from '@angular/core';

import { ReservationTourService } from '../reservation-tour.service';
import { TourReservation } from 'src/Model/TouResevation';


@Component({
  selector: 'app-reservation-tour',
  templateUrl: './reservation-tour.component.html',
  styleUrls: ['./reservation-tour.component.css']
})
export class ReservationTourComponent implements OnInit {
 
    message :any ;
    constructor(private service :ReservationTourService,
      private USERservice :GuideServiceService){}

      userId :any ;
      tourId: any;
      nbAreserver: any;
      

   

    
    TourReservation:TourReservation=new TourReservation(0,"","",0,0);
    ngOnInit(): void {

      
      
    
      
    }
     public registerNow(){
      let add =this.service.addTours(this.TourReservation);
       add.subscribe((data)=>this.message=data)}

    
       public reserverTour(){

        let d= this.service.reserverTours(this.userId,this.tourId,this.nbAreserver);
        d.subscribe();
       }
      

    }

    
  


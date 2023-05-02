import { Tour } from './Tour';
import { User } from './User';
enum RoleType {
    Delivered ,still,cancelled
  }
  
export class TourReservation {
   
    idTourReservation! : number;
    location! : string;
    guide! : string;
    nbareserver! : number;
    durationR! : number;
    user_iduser! : number;
    tour_id_tour! : number;
    tour! : Tour;
    user! : User;
    constructor(idTourReservation:number,location:string,guide:string,nbareserver:number,durationR:number) {
    };
    }





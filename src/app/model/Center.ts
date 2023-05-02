import { Activity } from './Activity';
import { Reservation } from './Reservation';
export class Center {
    idcenter!:number ;
    name !:string;
    number !:number; 
    state !: string;
    price !: number;
    rating !: number;
    activity !:Activity;
    reservation!:Reservation;
constructor(name :string,number :number,state : string ,price :number ,rating :number){};
}
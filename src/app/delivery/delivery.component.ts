import { DeliveryNawresService } from '../delivery-nawres.service';
import { Delivery } from './../../Model/Delivery';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit{
Delivery:Delivery=new Delivery(0,"",0,0,0);
message :any ;
constructor(private service :DeliveryNawresService,private http: HttpClient){}
d:any;
 
ngOnInit(): void {
  this.d= this.http.get<Delivery>('/Delivery/randomDelivery');
  
}
 public registerNow(){
  let add =this.service.addDelivery (this.Delivery)
  
add.subscribe((data)=>this.message=data)
alert('Le formulaire a été soumis !');}



public randemdelivery() {
  this.service.randomDelivery().subscribe(()=>console.log("succesfully"));
  alert(' l une livraison sera gratuit  !');
}



}



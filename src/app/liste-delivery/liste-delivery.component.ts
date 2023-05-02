
import { Delivery } from './../../Model/Delivery';

import { Component, OnInit } from '@angular/core';
import { DeliveryNawresService } from '../delivery-nawres.service';


@Component({
  selector: 'app-liste-delivery',
  templateUrl: './liste-delivery.component.html',
  styleUrls: ['./liste-delivery.component.css']
})
export class ListeDeliveryComponent implements OnInit {
  Delivery:Delivery=new Delivery(0,"",0,0,0);
  deliveries:any ;
  editing = false;
  data:any ;
  adress:string ;

public deleteDelivery(idDelivery:number){
 let d= this.service.deleteDelivery(idDelivery);
 d.subscribe(((data)=>this.deliveries=data));
}

public SearchDelivery(){
   
  if(this.adress ==""){
    this.ngOnInit();
  }else{
    this.deliveries=this.deliveries.filter((res:{adress:string;})=>{
      return res.adress.toLocaleLowerCase().match(this.adress.toLocaleLowerCase());
    })
  }
 
 }

editDelivery(Delivery: Delivery) {
  
  this.Delivery = Delivery;
  this.editing = true;
  alert('glisser la page  !');
}
registerNow() {
  this.service.updateDelivery(this.Delivery)
    .subscribe(() => {
      this.editing = false;
      this.Delivery = new Delivery(0,"",0,0,0);
      this.loadDeliveries;
    });
    alert('la valeur est bien modifiée !');
}
loadDeliveries(){
  let resp= this.service.getAllDeliverys();
  resp.subscribe((data)=>this.deliveries=data);  
}


constructor(private service :DeliveryNawresService){}
ngOnInit(): void {
let get =this.service.getAllDeliverys()
 get.subscribe(((data)=>this.deliveries=data));
}


}

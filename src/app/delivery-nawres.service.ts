
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../Model/Delivery';

@Injectable({
  providedIn:'root'
})
export class DeliveryNawresService {
  
  constructor(private http: HttpClient) { }
  //URL du backEnd
  url="";

  getAllDeliverys(){
    return this.http.get<Delivery[]>("http://localhost:8075/Delivery/retrieve-all-Deliverys");
  }

 /* getDeliveryById(idDelivery:number){
    return this.http.get<Delivery>(this.url+`/${idDelivery}`);
  }*/

  addDelivery(p: Delivery){
    return this.http.post<Delivery>("http://localhost:8075/Delivery/add-Delivery", p);
  }

  updateDelivery( p:Delivery){
    return this.http.put("http://localhost:8075/Delivery/update-Delivery", p);
  }

  deleteDelivery(idDelivery:number){
    return this.http.delete("http://localhost:8075/Delivery/remove-Delivery/"+idDelivery);
  }
  randomDelivery() {
    return this.http.put("http://localhost:8075/Delivery/randomDelivery",null);
  }



  

}





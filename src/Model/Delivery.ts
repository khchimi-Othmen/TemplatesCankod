enum DeliveryStatus {
    Delivered ,still,cancelled
  }
  enum DeliveryType {
    Normal,Express
  }
export class Delivery {
   
    idDelivery! : number;
    adress! : string;
    etat! : number;
    poids! : number;
    prixLivraison! : number;
    deliveryDate ! : Date;
    deliveryStatus : DeliveryStatus | undefined ;
    deliveryType: DeliveryType | undefined ;
    
    constructor(idDelivery:number, adress:string, etat:number,poids:number,prixLivraison:number) {
    };
    }





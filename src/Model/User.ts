enum RoleType {
    Delivered ,still,cancelled
  }
  
export class User {
   
    iduser! : number;
    firstName! : string;
    lastName! : string;
    age! : string;
    sexe! : string;
    email! : string;
    password! : string;
    phone! : string;
    adress_livraison! : string;
    poidLivreurmax! : number;
    etat_disponibilité ! : boolean;
    role : RoleType  ;
     PointBonus! : number;
    
    constructor(iduser:number,firstName:string,lastName:string,age:string,sexe:string,email:string,phone:string,adress_livraison:string) {
    };
    }





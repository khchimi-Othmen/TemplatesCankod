import { Reservation } from './../model/Reservation';
import { ReservationService } from './../reservation.service';
import { ActivityService } from './../activity.service';
import { ReviewC } from '../model/ReviewC';
import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { Center } from '../model/Center';
import { ReviewService } from '../review.service';
import { Activity } from '../model/Activity';


@Component({
  selector: 'app-centerfront',
  templateUrl: './centerfront.component.html',
  
  styleUrls: ['./centerfront.component.css']
})

export class CenterfrontComponent implements OnInit {
  starTemplate = '<i class="fa fa-star"></i>';
  c:Center=new Center("",0,"",0,0);
  review :ReviewC = new ReviewC(0,"");
  idcenter:number;
  centers: any;
  editing = false;
  reserve = false;
  defaultImagePath = 'assets/images/default.jpg';
  defaultImagePathA= 'assets/images/default.jpeg';
  public roundedRating: number;
  activities:any;
  idReservation:any
  reservation: Reservation = new Reservation();
    constructor(private serviceR: ReviewService,
    private service: CenterService,
    private serviceA:ActivityService,
    private servicer:ReservationService) {}
  // fonction pour afficher les centres avec des images avec le meme le nom de centre 
  getImagePath(center:Center): string {
    const imagePath = `assets/images/${center.name}.jpg`;
    return this.checkImageExists(imagePath) ? imagePath : this.defaultImagePath;
  }
  checkImageExists(imagePath: string): boolean {
    const http = new XMLHttpRequest();
    http.open('HEAD', imagePath, false);
    http.send();
    return http.status !== 404;
  }

  ngOnInit(): void {
    let resp= this.service.getAllCenters();
  resp.subscribe((centers: Center[])=>{ this.centers = centers;
  centers.forEach((center) => {
    this.updateCenterRating(center.idcenter);
  });
  
});
  }
 // center rating Average 
 updateCenterRating(idcenter: number): void {
 this.serviceR.getCenterRatings(idcenter).subscribe((ratings: ReviewC[]) => {
  if (ratings.length > 0) {
    const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = totalRating / ratings.length;
    this.roundedRating = Math.round(averageRating * 10) / 10;
    const integerPart = Math.floor(averageRating);
  
    const centerToUpdate: Center = this.centers.find((center) => center.idcenter === idcenter);
    //the integer part 
    centerToUpdate.rating =  Math.floor(this.roundedRating);
    
    this.service.updateCenter(centerToUpdate).subscribe(() => {
      console.log(`Center rating updated to ${this.roundedRating}`);
    });
  } else {
    console.log(`Center has no ratings yet`);
  }
});
 }

//rating 
change(c:any ){
  
  this.review.rating =c.rating
  if (c.rating > 0) {
  this.ajouterRainting(c.idcenter,this.review)
  }
}
  
ajouterRainting(idcenter: number, ratingc: ReviewC): void {
  this.serviceR.ajouterRating(idcenter, ratingc)
    .subscribe(() => console.log('Le raiting a été ajouté avec succès.'));
}
     //afficher demi etoile
     getRatingIcon(rating: number, index: number): number {
      if (rating >= index + 1) {
        return 1;
      } else if (rating >= index + 0.5) {
        return 0.5;
      } else {
        return 0;
      }
    }
    //activity of center
    getActivitiesForCenter(centerId: number) {
     let a= this.serviceA.getCenterActivities(centerId);
     a.subscribe(
      (activities: Activity[]) => {
        this.activities = activities;
        this.editing = true;
        console.log(`Activities for center ${centerId}: `, activities);
      },
      error => console.error('Error getting activities for center: ', error)
    );
}
getImagePathA(activity:Activity): string {
  const imagePath = `assets/images/${activity.activityType}.jpeg`;
  return this.checkImageExistsA(imagePath) ? imagePath : this.defaultImagePathA;
}
checkImageExistsA(imagePath: string): boolean {
  const http = new XMLHttpRequest();
  http.open('HEAD', imagePath, false);
  http.send();
  return http.status !== 404;
}

onSubmit(idcenter: number) {

 // show the reservation form for the center
  this.servicer.createReservation(this.reservation, idcenter)
    .subscribe(res => { 
      console.log('Reservation added successfully:', res);
      // TODO: handle success
    }, error => {
      console.error('Error adding reservation:', error);
      // TODO: handle error
    });
}


}



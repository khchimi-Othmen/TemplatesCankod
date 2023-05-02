import { Activity } from './../model/Activity';
import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activityfront',
  templateUrl: './activityfront.component.html',
  styleUrls: ['./activityfront.component.css']
})
export class ActivityfrontComponent implements OnInit {
  activities : any;
  defaultImagePath = 'assets/images/default.jpeg';
  constructor(private service :ActivityService) {}
  // fonction pour afficher les centres avec des images avec le meme le nom de centre 
  getImagePath(activity:Activity): string {
    const imagePath = `assets/images/${activity.activityType}.jpeg`;
    return this.checkImageExists(imagePath) ? imagePath : this.defaultImagePath;
  }
  checkImageExists(imagePath: string): boolean {
    const http = new XMLHttpRequest();
    http.open('HEAD', imagePath, false);
    http.send();
    return http.status !== 404;
  }

  ngOnInit(): void {
    let resp= this.service.getAllActivity();
  resp.subscribe((activities: Activity[])=>{ this.activities = activities;
  
});
  }

}

import { ActivityType } from './../model/ActivityType';
import { Activity } from './../model/Activity';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent  implements OnInit {
  constructor( private service:ActivityService){}
  newActivity: Activity = new Activity();
  activityTypes = Object.values(ActivityType);
  ngOnInit(): void { }
  public registerNow(){
    let resp = this.service.addAcrivity(this.newActivity );
    resp.subscribe(() => {
      // Reset the form and show a success message
      this.newActivity = new Activity();
      alert('Activity added successfully!');
    });
   }

}

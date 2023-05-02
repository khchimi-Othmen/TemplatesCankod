import { ActivityType } from './../model/ActivityType';
import { Activity } from './../model/Activity';
import { ActivityService } from './../activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-activity',
  templateUrl: './search-activity.component.html',
  styleUrls: ['./search-activity.component.css']
})
export class SearchActivityComponent  implements OnInit{
  activities : any;
  activity:any;
  editing = false;
  activityType :ActivityType;
  name:any;
  activityTypes = Object.values(ActivityType);
  activityId: number;
  centerId: number;
  constructor( private service:ActivityService){}
  ngOnInit(): void {
    let resp= this.service.getAllActivity();
    resp.subscribe((data)=>this.activities=data);
  }
  public deleteActivity(id:number){
    let resp= this.service.deleteActivity(id);
     resp.subscribe((data)=>this.activities=data);
   }
   public SearchActivity(){
    if(this.name === null){
      this.ngOnInit();
    } else {
       this.activities=this.activities.filter((activity) => activity.activityType === this.name)
      }
    
    
    }
  editActivity(activity: Activity) {
  
    this.activity = activity;
    this.editing = true;
  }
  loadActivities(){
    let resp= this.service.getAllActivity();
    resp.subscribe((data)=>this.activities=data);  
  }
  registerNow() {
    this.service.updateActivity(this.activity)
      .subscribe(() => {
        this.editing = false;
        this.activity = new Activity;
        this.loadActivities();
      });
  }
  
  assignActivityToCenter() {
   this.service.assignActivityToCenter(this.activityId, this.centerId).subscribe({
    next: () => console.log('Activity assigned to center successfully.'),
    error: error => console.error('Error assigning activity to center: ', error)
  });
  
  }
}


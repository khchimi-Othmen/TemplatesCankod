import { ActivityType } from './model/ActivityType';
import { Activity } from './model/Activity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  addAcrivity(p: Activity){
    return this.http.post("http://localhost:8075/Activity/add-Activity", p);
  }
  getAllActivity(){
    return this.http.get("http://localhost:8075/Activity/retrieve-all-Activities");
  }
  updateActivity(p:Activity){
    return this.http.put("http://localhost:8075/Activity/update-activity", p,{responseType:'text'as 'json'});
  }

  deleteActivity(idActivity:number){
    return this.http.delete("http://localhost:8075/Activity/remove-Activity/"+idActivity);
  }
  Search( a:ActivityType){
    return this.http.get("http://localhost:8075/Activity/search/"+a);
  }
  
  assignActivityToCenter(activityId: number, centerId: number) {
   return this.http.put(`http://localhost:8075/Activity/assi/${activityId}/${centerId}`,null)
  }
  getCenterActivities(idcenter: number) {
    return this.http.get("http://localhost:8075/Activity/centerActivities/"+idcenter);
  }
}
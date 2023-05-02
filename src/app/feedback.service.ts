import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { feedback } from './modules/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  public AddFeedback(feedback: any){
    return this.http.post("http://localhost:8088/Feedback/AddFeedback",feedback,{responseType:'text' as 'json'});

  }
  public FindFeedback() {
    return this.http.get("http://localhost:8088/Feedback/retrieve-all-feedbacks");
  }
  public Delete(idFeedback: number) {
    return this.http.delete(`http://localhost:8088/Feedback/remove-feedback/${idFeedback}`);
  }
  public updateFeedback( feedback: feedback): Observable<any> {
    return this.http.put("http://localhost:8088/Feedback/update-feedback/", feedback);
  }
  
}

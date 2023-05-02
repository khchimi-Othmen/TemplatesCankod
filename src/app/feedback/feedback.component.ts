import { Component, OnInit } from '@angular/core';
import {  feedback } from '../modules/feedback';
import { Subject } from '../modules/feedback';
import { Location } from '@angular/common';

import { FeedbackService } from '../../app/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 feedback : feedback=new feedback(
  1,
  Subject.Technical_Issue,
  "",
  new Date(),
  0
);
message:any;
feedbackList: any[] = [];
constructor(private service : FeedbackService,private location: Location){  }

  ngOnInit() {
    this.getFeedbacks();
    
  }
  Feedback() {
    let resp = this.service.AddFeedback(this.feedback);
    resp.subscribe((data) => {
      this.message = data;
      this.location.replaceState('/user/Feedback');
      location.reload();
    });
  }

public getFeedbacks() {
  this.service.FindFeedback().subscribe(data => {
    this.feedbackList = data as any[];
  });
}
editFeedback(feedback: feedback) {
  // Do something here to edit the feedback
}

deleteFeedback(idFeedback: number) {
  this.service.Delete(idFeedback).subscribe(
    response => {
      console.log("Feedback deleted successfully.");
      // Update the feedbackList after successful deletion
      this.getFeedbacks();
    },
    error => {
      console.log("Error while deleting feedback:", error);
    }
  );
}
/*public onUpdate(feedback: feedback): void {
  this.service.updateFeedback(feedback.idFeedback, feedback)
    .subscribe(
      (response) => {
        console.log('Feedback updated successfully:', response);
        // Update the feedbackList if necessary
      },
      (error) => {
        console.error('Failed to update feedback:', error);
      }
    );
}*/
public onUpdate(feedback: feedback) {
  this.feedback = feedback;
}


}

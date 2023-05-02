import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { feedback } from '../modules/feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbackList: feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService.FindFeedback().subscribe(data => {
      this.feedbackList = data as feedback[];
    });
  }

}

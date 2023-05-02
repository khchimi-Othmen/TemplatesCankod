import {  feedback } from '../modules/feedback';
import { Subject } from '../modules/feedback';
import { Location } from '@angular/common';
import { FeedbackService } from '../feedback.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { transport } from '../modules/transport';
import { TransportService } from '../transport.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TransportTicketService } from '../transport-ticket.service';
import { transportTicket } from '../modules/transportticket';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: any;

  feedbackList: any[] = [];
  transportlist: transport[] = [];
  transport = new transport(1, '', '', new Date('2023-05-01'), 0);
  ticket = new transportTicket(2,0, 0, this.transport);
  ticketlist: transportTicket[] = [];

  feedback : feedback=new feedback(
    1,
    Subject.Technical_Issue,
    "",
    new Date(),
    0
  );
  constructor(
    private transportTicketService: TransportTicketService,
    private service: TransportService,
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private ticketservice:TransportTicketService,

    private serviceFeedback: FeedbackService
 
  ) {}
  ngOnInit() {
    this.getTransports();
    this.getFeedbacks();
    this.getTickets();

  }
  public getTickets() {
    this.ticketservice.FindTickets().subscribe(data => {
      this.ticketlist = data as any[];
    });
  } 
  public getFeedbacks() {
    this.serviceFeedback.FindFeedback().subscribe(data => {
      this.feedbackList = data as any[];
    });
  }
  deletetickets(idTransportTicket: number) {
    this.ticketservice.Delete(idTransportTicket).subscribe(
      response => {
        console.log("Feedback deleted successfully.");
        // Update the feedbackList after successful deletion
        this.getTickets();
      },
      error => {
        console.log("Error while deleting feedback:", error);
      }
    );
  }
  deleteFeedback(idFeedback: number) {
    this.serviceFeedback.Delete(idFeedback).subscribe(
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
  getTransports(): void {
    this.service.FindTransport().subscribe((data) => {
      this.transportlist = data as transport[];
    });
  }
 search(departure: string, destination: string){
  this.service.getTransportsByCities(departure,destination).subscribe((data) => {
    this.transportlist = data as transport[];
  });
 }
 
  deleteTransport(idTransport: number) {
    this.service.Delete(idTransport).subscribe(
      (response) => {
        console.log('Feedback deleted successfully.');
        // Update the feedbackList after successful deletion
        this.getTransports();
      },
      (error) => {
        console.log('Error while deleting feedback:', error);
      }
    );
  }
/*
  public onUpdate(transport: transport) {
    this.transport = transport;
    this.location.replaceState('/user/Transport');
      location.reload();
  }*/
  onUpdate(transport: transport) {
    // Navigate to the TransportComponent and pass the transport as a parameter
    this.router.navigate(['user/Transport'], { state: { transport } });
  }

  
}
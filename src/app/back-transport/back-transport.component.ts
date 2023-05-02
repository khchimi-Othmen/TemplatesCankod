import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { transport } from '../modules/transport';
import { TransportService } from '../transport.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TransportTicketService } from '../transport-ticket.service';
@Component({
  selector: 'app-back-transport',
  templateUrl: './back-transport.component.html',
  styleUrls: ['./back-transport.component.css']
})
export class BackTransportComponent implements OnInit {
  message: any;
  transportlist: transport[] = [];
  transport = new transport(1, '', '', new Date('2023-05-01'), 0);
  
  constructor(
    private transportTicketService: TransportTicketService,
    private service: TransportService,
    private location: Location,
    private router: Router,
    private http: HttpClient
 
  ) {}
  ngOnInit(): void {
    this.getTransports();
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
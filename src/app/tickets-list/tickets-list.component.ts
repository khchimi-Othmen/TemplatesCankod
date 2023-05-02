import { Component,OnInit} from '@angular/core';
import { transport } from '../modules/transport';
import { TransportService } from '../transport.service';
import { transportTicket } from '../modules/transportticket';
import { TransportTicketService } from '../transport-ticket.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
  transportlist: transport[] = [];
  ticketlist: transportTicket[] = [];

  x = new transport(1, '', '', new Date('2023-05-01'), 0);
message:any;
   ticket = new transportTicket(2,0, 0, this.x);

  constructor(
    private service: TransportService,
    private ticketservice:TransportTicketService,
    private location: Location
 
  ) {}
  ngOnInit() {
    this.getTickets();

  }
  public getTickets() {
    this.ticketservice.FindTickets().subscribe(data => {
      this.ticketlist = data as any[];
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
  QrCode(idTransportTicket: number) {
    this.ticketservice.downloadQRCode(idTransportTicket);
  }
    }


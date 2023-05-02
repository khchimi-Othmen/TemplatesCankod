import { Component,OnInit} from '@angular/core';
import { transport } from '../modules/transport';
import { TransportService } from '../transport.service';
import { transportTicket } from '../modules/transportticket';
import { TransportTicketService } from '../transport-ticket.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
declare var google: any;

@Component({
  selector: 'app-transport-ticket',
  templateUrl: './transport-ticket.component.html',
  styleUrls: ['./transport-ticket.component.css'],
})
export class TransportTicketComponent implements OnInit {
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
  ngOnInit(): void {
    this.getTransports();

  }
  search(departure: string, destination: string){
    this.service.getTransportsByCities(departure,destination).subscribe((data) => {
      this.transportlist = data as transport[];
    });
   }
  getTransports(): void {
    this.service.FindTransport().subscribe((data) => {
      this.transportlist = data as transport[];
    });
  }
  // Import the necessary dependencies
  
  reserveTicket(transport: transport) {
    let resp = this.ticketservice
    .addAndAssignTransportTicket(transport.idTransport, this.ticket)
    .subscribe((data) => {
      this.message = data;
      
      this.location.replaceState('/user/TransportTicket');
      location.reload();

    });
  
      console.log(transport);
      console.log(this.ticket);
    }
    showMap(departure: string, destination: string) {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
  
      const mapOptions = {
        zoom: 10,
        center: { lat: 33.8869, lng: 9.5375 },
      };
  
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      directionsRenderer.setMap(map);
  
      const request = {
        origin: departure,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      };
  
      directionsService.route(request, function(result: any, status: any) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        }
      });
  
      
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

    
  }
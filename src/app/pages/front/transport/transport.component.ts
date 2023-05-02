import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { transport } from 'src/app/modules/transport';
import { TransportService } from 'src/app/transport.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})

export class TransportComponent implements OnInit {
  map: google.maps.Map;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;
  message: any;
  transportlist: transport[] = [];
  transport = new transport(1, '', '', new Date('2023-05-01'), 0);
  @ViewChild('mapIframe') mapIframe!: ElementRef;

  constructor(
    private service: TransportService,
    private location: Location,
    private renderer: Renderer2,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.initializeMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      panel: document.getElementById('directions-panel'),
    });
    this.getTransports();
  }
  getTransports(): void {
    this.service.FindTransport().subscribe((data) => {
      this.transportlist = data as transport[];
    });
  }
  initializeMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 33.8869, lng: 9.5375 },
      zoom: 10,
    });
  }
  
 
  
  public calculateRoute() {
    // Implementation remains the same
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      panel: document.getElementById('directions-panel') as HTMLElement,
      polylineOptions: {
        strokeColor: '#FF0000' // Set the desired color for the route
      }
    });
  
    const request = {
      origin: this.transport.departure,
      destination: this.transport.destination,
      travelMode: google.maps.TravelMode.DRIVING
    };
  
    directionsService.route(request, (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
  
        // Retrieve the distance from the result
        const distance = result.routes[0].legs[0].distance.text;
        console.log(distance);
      } else {
        console.error('Error:', status);
      }
    });
  }
  
  

  
 
  Transport() {
    let resp = this.service.AddTransport(this.transport);
    resp.subscribe((data) => {
      this.message = data;
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

  public onUpdate(transport: transport) {
    this.transport = transport;
  }
}

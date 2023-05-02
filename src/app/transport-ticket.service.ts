import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transportTicket } from './modules/transportticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportTicketService {
  private baseUrl = `http://localhost:8088/TransportTicket`;

  constructor(private http: HttpClient) {}

  addAndAssignTransportTicket(idTransport: number, ticket: transportTicket): Observable<transportTicket> {
    const url = `${this.baseUrl}/AddTicket/${idTransport}`;
    return this.http.post<transportTicket>(url, ticket);
    
  }
  public FindTickets() {
    return this.http.get("http://localhost:8088/TransportTicket/retrevive-transportTickets");
  }
  public Delete(idTransportTicket: number) {
    return this.http.delete(`http://localhost:8088/TransportTicket/remove-transportTicket/${idTransportTicket}`);
  }

  public  downloadQRCode(idTransportTicket: number) {
    // Make the HTTP GET request
    this.http.get(`http://localhost:8088/TransportTicket/DownloadQRCode/${idTransportTicket}`, { responseType: 'blob' })
      .subscribe(response => {
        // Create a blob URL from the response
        const url = window.URL.createObjectURL(response);
  
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = "Ticket Num"+idTransportTicket.toString();
        link.click();
  
        // Clean up the blob URL
        window.URL.revokeObjectURL(url);
      });
  }
}

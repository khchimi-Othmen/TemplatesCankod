import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transport } from './modules/transport';
@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http:HttpClient) { }
  public AddTransport(transport: transport){
    return this.http.post("http://localhost:8088/Transport/AddTransport",transport,{responseType:'text' as 'json'});

  }
  
    
 
  public getTransportsByCities(departure: string, destination: string) {
    return this.http.get(`http://localhost:8088/Transport/retrieve-transports-by-city?departure=${departure}&destination=${destination}`);
  }
  public FindTransport() {
    return this.http.get("http://localhost:8088/Transport/retrieve-all-transport");
  }
  public Delete(idTransport: number) {
    return this.http.delete(`http://localhost:8088/Transport/remove-transport/${idTransport}`);
  }
  public updateTransport( transport: transport): Observable<any> {
    return this.http.put("http://localhost:8088/Transport/update-transport/", transport);
  }
  
}

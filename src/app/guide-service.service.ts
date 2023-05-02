import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideServiceService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get("http://localhost:8075/User/retrieve-all-Users");
  }
}

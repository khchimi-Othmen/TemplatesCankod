import { ReviewC } from './model/ReviewC';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 
private reviewUrl = 'http://localhost:8075/Review';
  constructor(private http: HttpClient) { }
  ajouterRating(idcenter: number, raintingC: ReviewC) {
  
    return this.http.post("http://localhost:8075/Review/apply/"+idcenter, raintingC);
  }
  getCenterRatings(idcenter: number) {
    const url = `${this.reviewUrl}/centerRatings/${idcenter}`;
    return this.http.get(url);
  }
}

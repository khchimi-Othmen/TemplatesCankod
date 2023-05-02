import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { badwords } from './modules/badwords';
@Injectable({
  providedIn: 'root'
})
export class BadWordsService {

  constructor(private http:HttpClient) { }
  public addBadWords(badwords: any){
    return this.http.post("http://localhost:8088/BadWords/AddBadWords",badwords,{responseType:'text' as 'json'});

  }
  public FindBadWords() {
    return this.http.get("http://localhost:8088/BadWords/retrieve-all-BadWords");
  }
  public Delete(idBadWords: number) {
    return this.http.delete(`http://localhost:8088/BadWords/remove-BadWords/${idBadWords}`);
  }
  public updateBadWords( badwords: badwords): Observable<any> {
    return this.http.put("http://localhost:8088/BadWords/update-BadWords", badwords);
  }
  }

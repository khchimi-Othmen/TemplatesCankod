import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { prioritywords } from './modules/prioritywords';
@Injectable({
  providedIn: 'root'
})
export class PriorityWordsService {

  constructor(private http:HttpClient) { }
  public addPriorityWords(prioritywords: any){
    return this.http.post("http://localhost:8088/PriorityWords/AddPriorityWords",prioritywords,{responseType:'text' as 'json'});

  }
  public FindPriorityWords() {
    return this.http.get("http://localhost:8088/PriorityWords/retrieve-all-PriorityWords");
  }
  public Delete(IdWord: number) {
    return this.http.delete(`http://localhost:8088/PriorityWords/remove-PriorityWords/${IdWord}`);
  }
  public updatePriorityWords( prioritywords: prioritywords): Observable<any> {
    return this.http.put("http://localhost:8088/PriorityWords/update-PriorityWords", prioritywords);
  }
  }

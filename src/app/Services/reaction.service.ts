import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {reaction} from "../../assets/Models/reaction";
import {Observable} from "rxjs";
import {publication} from "../../assets/Models/publication";

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http:HttpClient) { }

  public getreaction():Observable<reaction[]>{
    return this.http.get<reaction[]>("http://localhost:8088/Reaction/retrieve-all-reation");

}
public  addReact(react:reaction){
    return this.http.post<reaction>("http://localhost:8088/Reaction/add-reaction",react);

}
public upadateReact(react:reaction){
    return this.http.put<reaction>("http://localhost:8088/Reaction/update-Reaction",react)

}

public deleteReact(id:number){
    return this.http.delete("http://localhost:8088/Reaction/remove-Reaction/"+id);
}
public getbyid(id:number){
    return this.http.get<reaction>("http://localhost:8088/Reaction/retrieve-reaction/"+id);
}
}

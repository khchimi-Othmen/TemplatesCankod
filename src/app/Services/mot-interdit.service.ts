import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {motInterdit} from "../../assets/Models/motInterdit";

@Injectable({
  providedIn: 'root'
})
export class MotInterditService {

  constructor(private http:HttpClient) { }


  public getMotInterdits():Observable<motInterdit[]>{
    return this.http.get<motInterdit[]>("http://localhost:8088/mots-interdits/retrieve-all-mot");
  }
  public  addMotInterdit(bad:motInterdit){
    return this.http.post<motInterdit>("http://localhost:8088/mots-interdits/add-MotInterdit",bad);

  }

  public deleteMotInterdit(idMot:number){
    return this.http.delete(`http://localhost:8088/mots-interdits/remove-Mot/${idMot}`);
  }

}

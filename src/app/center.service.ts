import { Center } from './model/Center';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http: HttpClient) { }
  //URL du backEnd
  url="http://localhost:8075/Center";

  addCenter(p: Center){
    return this.http.post("http://localhost:8075/Center/add-Center", p,{responseType:'text'as 'json'});
  }
  getAllCenters(){
    return this.http.get("http://localhost:8075/Center/retrieve-all-Centers");
  }

  getCenterByName(name:String){
    return this.http.get("http://localhost:8075/Center/retrieve-Center/"+name,{responseType:'text'as 'json'});
  }

  

  updateCenter(p:Center){
    return this.http.put("http://localhost:8075/Center/update-center", p,{responseType:'text'as 'json'});
  }

  deleteCenter(idcenter:number){
    return this.http.delete("http://localhost:8075/Center/remove-Center/"+idcenter);
  }
  nbRatingCenter(idcenter:number){
    return this.http.get ("http://localhost:8075/Center/nbRatingCenter/"+idcenter);
  }
}

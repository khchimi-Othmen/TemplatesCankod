import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {publication} from "../../assets/Models/publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor(private http:HttpClient) { }
 public getpublication(){
    return this.http.get<any>("http://localhost:8088/Publication/retrieve-all-publication")
 }

  /// up img
  public addPublication(request: any, file: File) {
    const formData: FormData = new FormData();
    let JsonConvert=  JSON.stringify(request) ;
    formData.append('request', JsonConvert);
    formData.append('file', file);
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'multipart/form-data');
    return this.http.post<any>("http://localhost:8088/Publication/add-publication" , formData, { headers: httpHeaders });
  }
  ///
  public upadatePublication(pub:publication){
    return this.http.put<publication>("http://localhost:8088/Publication/update-Publication",pub)
  }

  public deletePublication(id:number){
    return this.http.delete("http://localhost:8088/Publication/remove-Publication/"+id);
  }

  public getbyid(id:number){
    return this.http.get<any>("ttp://localhost:8088/Publication/retrieve-publication/"+id);
  }

}

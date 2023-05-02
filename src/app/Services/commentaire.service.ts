import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {commentaire} from "../../assets/Models/commentaire";
import {Observable} from "rxjs";
import {motInterdit} from "../../assets/Models/motInterdit";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

    public  addComment(com:commentaire){
    return this.http.post<commentaire>("http://localhost:8088/Commentaire/add-commentaire",com);

  }
  public getComments():Observable<commentaire[]>{
    return this.http.get<commentaire[]>("http://localhost:8088/Commentaire/retrieve-all-Commentaires");
  }
}



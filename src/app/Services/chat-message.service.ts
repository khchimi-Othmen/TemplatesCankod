/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {ChatMessage} from "../../assets/Models/chatMessage";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private chatUrl = 'http://localhost:8088/ws';

  constructor(private http: HttpClient) { }

  sendMessage(message: ChatMessage): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(message);
    this.http.post(this.chatUrl + '/send', body, { headers: headers }).subscribe();
  }


  public connect(): void {
    const socket = new SockJS(this.chatUrl);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      console.log('connected');
    });
  }
  public getUsername(): Observable<string> {
    return new Observable<string>((observer) => {
      this.stompClient.subscribe('/topic/getUsername', (username: string) => {
        observer.next(username);
      });
    });
  }

  public getChatMessages(): Observable<ChatMessage> {
    return new Observable<ChatMessage>((observer) => {
      this.stompClient.subscribe('/topic/getChatMessage', (message: ChatMessage) => {
        observer.next(message);
      });
    });
  }
}
*/

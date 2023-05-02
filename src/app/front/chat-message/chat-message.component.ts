/*import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../../../assets/Models/chatMessage";
import {ChatService} from "../../Services/chat-message.service";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  messages: ChatMessage[] = []; // Ajouter cette ligne
  chatMessages: ChatMessage[] = [];
  message: ChatMessage = new ChatMessage();
  username: string = '';


  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.connect();
    this.chatService.getUsername().subscribe((username: string) => {
      this.username = username;
    });
    this.chatService.getChatMessages().subscribe((message: ChatMessage) => {
      this.chatMessages.push(message);
    });
  }

  sendMessage() {
    this.message.sender = this.username;
    this.chatService.sendMessage(this.message);
    this.message = new ChatMessage();
  }

}


 */

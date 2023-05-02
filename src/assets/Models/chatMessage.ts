export enum MessageType {
  CHAT, JOIN, LEAVE
}

export class ChatMessage {
  idMess!: number
  content!: String
  sender!: String
  messageType!: MessageType
}

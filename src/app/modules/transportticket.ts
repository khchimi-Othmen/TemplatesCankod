//import { User } from './user.model';

import { transport } from "./transport";

export class transportTicket {
  constructor(
    public idTransportTicket: number,
    public distance: number,
    public prix: number,
    public transport: transport, 
        //public userTicket: User
  ) {}
}

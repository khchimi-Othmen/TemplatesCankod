
//import { User } from './user.model';

export class transport {
  constructor(
    public idTransport: number,
    public departure: string,
    public destination: string,
    public dateTransport: Date,
    public nombrePlaces: number,
    //public user: User
  ) {}
}

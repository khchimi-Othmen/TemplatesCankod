export enum TypePublication{
  TEXT,VIDEO,PHOTO
}

export class publication{
  constructor(
    public idPub: number,
    public content:string,
  public nbrcomment:number,
  public image: string,
  public pubDate: Date,
  public typePublication:TypePublication) {
  }
}




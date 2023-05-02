
export enum Subject {
  Technical_Issue,
  Centre_and_Activity,
  Online_Store,
  Transport,
  Forum
}

export class feedback {
  constructor(
    public idFeedback: number,
    public sub: Subject,
    public description: string,
    public dateFeedback: Date,
    public nbrw: number
  ) {}
}

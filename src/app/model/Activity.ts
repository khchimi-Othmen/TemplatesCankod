import { ActivityType } from './ActivityType';
export class Activity {
    idActivity!:number ;
    location!:string;
    priceA !: number;
    activityType !:ActivityType;
    startDate !: Date;
    endDate !: Date;
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './feedback.service';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { TransportTicketComponent } from './transport-ticket/transport-ticket.component';
import { TransportComponent } from './pages/front/transport/transport.component';
import { TransportlistComponent } from './transportlist/transportlist.component';
import { MapComponent } from './map/map.component';
import { BadWordsComponent } from './bad-words/bad-words.component';
import { PriorityWordsComponent } from './priority-words/priority-words.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { BackFeedbackComponent } from './back-feedback/back-feedback.component';
import { BackTransportComponent } from './back-transport/back-transport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [

  { path :"", redirectTo:"admin", pathMatch:"full"},
  { path :'admin', component:AllTemplateAdminComponent,
    children:[
      {path:"",component:BodyAdminComponent},
      {path:"Badwords",component:BadWordsComponent},
      {path:"PriorityWords",component:PriorityWordsComponent},
      {path:"FeedBackDashboard",component:BackFeedbackComponent},
      {path:"TransportDashboard",component:BackTransportComponent},
      {path:"Dashboard",component:DashboardComponent},

    ]},
    
  { path :'user', component:AllTemplateUserComponent,
    children:[
      {path:"",component:BodyUserComponent},
      {path:"Transport",component:TransportComponent},
      {path:"Feedback",component:FeedbackComponent},
      {path:"ListFeedbacks",component:FeedbackListComponent},
      {path:"Transportlist",component:TransportlistComponent},
      {path:"TransportTicket",component:TransportTicketComponent},
      {path:"Ticketlist",component:TicketsListComponent},

    ]},



  {path:"**",component:AllTemplateUserComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

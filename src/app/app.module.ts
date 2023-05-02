import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FeedbackService } from './feedback.service';

import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { TransportTicketComponent } from './transport-ticket/transport-ticket.component';
import { TransportComponent } from './pages/front/transport/transport.component';
import { TransportlistComponent } from './transportlist/transportlist.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BadWordsComponent } from './bad-words/bad-words.component';
import { PriorityWordsComponent } from './priority-words/priority-words.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { BackFeedbackComponent } from './back-feedback/back-feedback.component';
import { BackTransportComponent } from './back-transport/back-transport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    HeaderUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    FeedbackComponent,
    FeedbackListComponent,
    TransportTicketComponent,
    TransportComponent,
    TransportlistComponent,
    MapComponent,
    BadWordsComponent,
    PriorityWordsComponent,
    TicketsListComponent,
    BackFeedbackComponent,
    BackTransportComponent,
    DashboardComponent,
   
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule

  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }

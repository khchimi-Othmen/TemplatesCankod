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
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryNawresService } from './delivery-nawres.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ListeDeliveryComponent } from './liste-delivery/liste-delivery.component';
import { MapComponent } from './map/map.component';
import {  GuideComponent } from './guide/guide.component';
 import {MatIconModule} from '@angular/material/icon';
 import { MatCardModule } from '@angular/material/card';
import { ReservationTourComponent } from './reservation-tour/reservation-tour.component';
import { ToastrModule } from 'ngx-toastr';



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
    DeliveryComponent,
  ListeDeliveryComponent,
  MapComponent,
  GuideComponent,
  ReservationTourComponent,
 
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatCardModule,ToastrModule.forRoot(),
  ],
  providers: [DeliveryNawresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

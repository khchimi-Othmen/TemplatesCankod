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
import { CenterComponent } from './center/center.component';
import { CenterService } from './center.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchCenterComponent } from './search-center/search-center.component';
import { CenterfrontComponent } from './centerfront/centerfront.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ActivityComponent } from './activity/activity.component';
import { SearchActivityComponent } from './search-activity/search-activity.component';
import { ActivityfrontComponent } from './activityfront/activityfront.component';
import { ReservationComponent } from './reservation/reservation.component';



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
    CenterComponent,
    SearchCenterComponent,
    CenterfrontComponent,
    ActivityComponent,
    SearchActivityComponent,
    ActivityfrontComponent,
    ReservationComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    NgxStarRatingModule,

  ],
  providers: [CenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

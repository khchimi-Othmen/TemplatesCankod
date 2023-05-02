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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './backOffice/confirmPage/confirm/confirm.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SendMailResetComponent } from './backOffice/sendMailReset/send-mail-reset/send-mail-reset.component';
import { ResetPassComponent } from './backOffice/resetPass/reset-pass/reset-pass.component';


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
    SigninComponent,
    SignupComponent,
    ConfirmComponent,
    ListUserComponent,
    SendMailResetComponent,
    ResetPassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

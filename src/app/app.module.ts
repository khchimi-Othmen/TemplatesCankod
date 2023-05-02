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
import { PublicationComponent } from './front/publication/publication.component';
import { ReactionComponent } from './front/reaction/reaction.component';
import { CommentaireComponent } from './front/commentaire/commentaire.component';
//import { ChatMessageComponent } from './front/chat-message/chat-message.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AddreactComponent} from "./front/addreact/addreact.component";
import { UpdatereactComponent } from './front/updatereact/updatereact.component';
import { MatCardModule } from '@angular/material/card';
import { AddpostComponent } from './front/addpost/addpost.component';
import { MotInterditComponent } from './back/mot-interdit/mot-interdit.component';
import { AddMotComponent } from './back/add-mot/add-mot.component';
import {MatIconModule} from "@angular/material/icon";
import { UpdatepubComponent } from './front/updatepub/updatepub.component';


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
    PublicationComponent,
    ReactionComponent,
    CommentaireComponent,
    //ChatMessageComponent,
    AddreactComponent,
    UpdatereactComponent,
    AddpostComponent,
    MotInterditComponent,
    AddMotComponent,
    UpdatepubComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

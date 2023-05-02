import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import {ReactionComponent} from "./front/reaction/reaction.component";
import {PublicationComponent} from "./front/publication/publication.component";
import {CommentaireComponent} from "./front/commentaire/commentaire.component";
import {AddreactComponent} from "./front/addreact/addreact.component";
import {UpdatereactComponent} from "./front/updatereact/updatereact.component";
import {AddpostComponent} from "./front/addpost/addpost.component";
import {MotInterditComponent} from "./back/mot-interdit/mot-interdit.component";
import {AddMotComponent} from "./back/add-mot/add-mot.component";
import {UpdatepubComponent} from "./front/updatepub/updatepub.component";
//import {ChatMessageComponent} from "./front/chat-message/chat-message.component";

const routes: Routes = [
  { path :"", redirectTo:"admin", pathMatch:"full"},
  { path :'admin', component:AllTemplateAdminComponent,
    children:[
      {path:"",component:BodyAdminComponent},
      {path:"badWr", component: MotInterditComponent},
      {path:"addbadWr", component:AddMotComponent }

    ]},
  { path :'user', component:AllTemplateUserComponent,
    children:[
      {path:"",component:BodyUserComponent},
      {path:"reaction",component:ReactionComponent},
      {path:"post",component:PublicationComponent},
      {path:"comment",component:CommentaireComponent},
      {path: "addreaction",component: AddreactComponent},
      {path: "updatereact/:id",component: UpdatereactComponent},
      {path: "addpost",component: AddpostComponent},
      {path: "updatePost/:id",component: UpdatepubComponent},


    ]},

  {path:"**",component:AllTemplateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

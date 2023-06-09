import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";

const routes: Routes = [
  { path :"", redirectTo:"admin", pathMatch:"full"},
  { path :'admin', component:AllTemplateAdminComponent,
    children:[
      {path:"",component:BodyAdminComponent}
    ]},
  { path :'user', component:AllTemplateUserComponent,
    children:[
      {path:"",component:BodyUserComponent}
    ]},

  {path:"**",component:AllTemplateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

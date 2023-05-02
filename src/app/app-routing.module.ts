import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from "./backOffice/all-template-admin/all-template-admin.component";
import { BodyAdminComponent } from "./backOffice/body-admin/body-admin.component";
import { AllTemplateUserComponent } from "./frontOffice/all-template-user/all-template-user.component";
import { BodyUserComponent } from "./frontOffice/body-user/body-user.component";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmComponent } from './backOffice/confirmPage/confirm/confirm.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SendMailResetComponent } from './backOffice/sendMailReset/send-mail-reset/send-mail-reset.component';
import { ResetPassComponent } from './backOffice/resetPass/reset-pass/reset-pass.component';

const routes: Routes = [
  // { path: "", redirectTo: "admin", pathMatch: "full" },
  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      { path: "", component: BodyAdminComponent }
    ]
  },
  {
    path: 'user', component: AllTemplateUserComponent,
    children: [
      {
        path: "",
        component: BodyUserComponent
      }
    ]
  },
  {
    path: 'sendMail', component: SendMailResetComponent,
    children: [
      {
        path: "sendMail",
        component: SendMailResetComponent
      }
    ]
  },
  {
    path: 'resetPass', component: ResetPassComponent,
    children: [
      {
        path: "resetPass",
        component: ResetPassComponent
      }
    ]
  },
  // { path: "**", component: AllTemplateUserComponent },
  {
    path: 'signin',
    component: SigninComponent,
    children: [
      {
        path: 'signin',
        loadChildren: () => import('./signin/signin.component').then(m => m.SigninComponent)
      }
    ],

  },
  {
    path: 'confirm',
    component: ConfirmComponent,
    children: [
      {
        path: 'confirm',
        loadChildren: () => import('./backOffice/confirmPage/confirm/confirm.component').then(m => m.ConfirmComponent)
      }
    ],

  },
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./signup/signup.component').then(m => m.SignupComponent)
      }
    ],

  },
  {
    path: 'all',
    component: ListUserComponent,
    children: [
      {
        path: 'all',
        loadChildren: () => import('./list-user/list-user.component').then(m => m.ListUserComponent)
      }
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

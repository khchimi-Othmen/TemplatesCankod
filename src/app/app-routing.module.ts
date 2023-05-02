import { ReservationComponent } from './reservation/reservation.component';

import { ActivityfrontComponent } from './activityfront/activityfront.component';
import { ActivityComponent } from './activity/activity.component';
import { CenterfrontComponent } from './centerfront/centerfront.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import { CenterComponent } from './center/center.component';
import { SearchCenterComponent } from './search-center/search-center.component';
import { SearchActivityComponent } from './search-activity/search-activity.component';

const routes: Routes = [
  { path :"", redirectTo:"admin", pathMatch:"full"},
  { path :'admin', component:AllTemplateAdminComponent,
    children:[
      {path:"",component:BodyAdminComponent},
      { path :'addCenter', component:CenterComponent},
      { path :'getAllCenters', component:SearchCenterComponent},
      { path :'getAllReservations', component:ReservationComponent},
      { path :'getAllActivities', component:SearchActivityComponent},
      { path :'addActivity', component:ActivityComponent},
    
    ]},
  { path :'user', component:AllTemplateUserComponent,
    children:[
      {path:"frontActivity",component:ActivityfrontComponent},
      {path:"frontCenter",component:CenterfrontComponent},
      {path:"",component:BodyUserComponent},
      
    ]},
  {path:"**",component:AllTemplateUserComponent},
  { path :'addActivity', component:ActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ReservationTourComponent } from './reservation-tour/reservation-tour.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import { DeliveryComponent } from './delivery/delivery.component';
import { ListeDeliveryComponent } from './liste-delivery/liste-delivery.component';
import { MapComponent } from './map/map.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  { path :"", redirectTo:"admin", pathMatch:"full"},
  { path :'admin', component:AllTemplateAdminComponent,
    children:[
      {path:"",component:BodyAdminComponent},
      {path:"addDelivery",component:DeliveryComponent},
      {path:"getallDeliveries",component:ListeDeliveryComponent},
      {path:"map",component:MapComponent},
      
    ]},
  { path :'user', component:AllTemplateUserComponent,
    children:[
      {path:"",component:BodyUserComponent},
      {path:"guide",component:GuideComponent},
      {path:"reserver",component:ReservationTourComponent},
      {path:"map",component:MapComponent},
    ]},

  {path:"**",component:AllTemplateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

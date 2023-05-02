import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  token:any;
  constructor(private userService:UserService){}
  confirm(token){
    this.userService.confirm(token).subscribe((data) => {
      console.log(data);
     
    });}
}

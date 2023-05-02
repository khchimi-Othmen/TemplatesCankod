import { Component, OnInit } from '@angular/core';
import * as e from 'cors';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-send-mail-reset',
  templateUrl: './send-mail-reset.component.html',
  styleUrls: ['./send-mail-reset.component.css']
})
export class SendMailResetComponent implements OnInit{
  email!:string;
constructor(private userService:UserService){}
ngOnInit(): void {
  
}


sendReset(email: any) {
  this.userService.SendReset(email).subscribe((data) => {
    console.log(data);
   
  });
}


}

import { Component } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent {
idUser:any;
token:any;
password:any;

constructor(private userService: UserService){}

ResetPass(idUser,token,password){
  this.userService.ResetPass(idUser,token,password).subscribe((data) => {
    console.log(data);
   
  });

}


}

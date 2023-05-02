import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/service/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error: any;
  email!: string;
  password!: string;

  displaymenu = false;
  displayemployee = false;
  displayuser = false;
  currentrole: any;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {

  }








  //request authentication
  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    // this.userService.searchRoleByEmail(data.email).subscribe(role => {
    //   this.userRole = role;
    //   console.log(`User Role: ${role}`);
    // });




    //authentication response ??
    console.log(data)
    this.userService.login(data).subscribe(
      response => {
        this.userService.setToken(response.token);
        this.route.navigate(['']);
        console.log(response.token);

      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
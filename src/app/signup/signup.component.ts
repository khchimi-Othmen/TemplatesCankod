import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/model/user';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private userService: UserService, private currentRoute: ActivatedRoute, private route: Router) { }

  user: User = new User();
  userList: User[] = [];
  action: string = '';


  ngOnInit(): void {

    this.user = new User();
    let id = this.currentRoute.snapshot.params['id'];
    this.user.idUser = id;
    if (id != null) {
      //update

      //add
      this.action = 'add new';
      this.user = new User();

      this.userService.getAll().subscribe((data: User[]) => {
        this.userList = data;
      });
    }
  }
  saveUser(): void {
    let data = new User()
    data = {
      idUser: this.user.idUser,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
      enabled: this.user.enabled
    };


    console.log(data);
    this.userService.SignUp(data)
      .subscribe({
        next: (res) => {
          console.log(res);

          this.route.navigate(['/signin']); //redirection signin

        },
        error: (e) => console.error(e)
      });
  }


}

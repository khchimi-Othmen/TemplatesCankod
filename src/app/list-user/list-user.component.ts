import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  Users: any;
  constructor(private userService: UserService) { }
  user: User;
  userList: User[];


  ngOnInit(): void {
  }
  allUsers() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res;
      console.log(this.userService.getAll());
    });
  }

}

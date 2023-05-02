import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/service/user.service';


@Component({
  selector: 'app-body-admin',
  templateUrl: './body-admin.component.html',
  styleUrls: ['./body-admin.component.css']
})

export class BodyAdminComponent implements OnInit {
  Users: any;
  searchTerm = '';
  constructor(private userService: UserService,) { }
  user: User;
  userList: User[];




  ngOnInit(): void {
    this.allUsers();
    this.user = new User();
    this.fetchData();
    // Call fetchData method every 5 seconds
    setInterval(() => {
      this.fetchData();
    }, 1000);


  }
  allUsers() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res;
      console.log(this.userService.getAll());
    });
  }
  fetchData() {
    this.userService.getAll().subscribe((data) => {
      this.userList = data;
    });
  }

  deleteProjet(idProjet: any) {
    this.userService.delete(idProjet).subscribe((data) => {
      console.log(data);

    });
  }







  enable(idProjet: any) {
    this.userService.enable(idProjet).subscribe((data) => {
      console.log(data);

    });
  }

  disable(idProjet: any) {
    this.userService.disable(idProjet).subscribe((data) => {
      console.log(data);

    });
  }




}

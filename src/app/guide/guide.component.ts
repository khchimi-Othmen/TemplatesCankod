import { User } from './../../Model/User';
import { Component, OnInit } from '@angular/core';
import { GuideServiceService } from '../guide-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
 User:User=new User(0,"","","","","","","");
  users :any ;
  ///imagePath = 'assets/images/string.jpeg';
   imagePath2 = 'assets/images/guide2.jpeg';
  defaultImagePath = 'assets/images/guide3.jpeg';
  

  getImagePath(User:User): string {
   const imagePath =` assets/images/${User.firstName}.jpeg`;
    return  imagePath ;
  }

 




constructor(private router: Router,private service :GuideServiceService){}
ngOnInit(): void {
let a =this.service.getAllUsers()
 a.subscribe(((data)=>this.users=data));


}



redirectToPage() {
 

  this.router.navigate(['/user/reserver']) ;


}}
  
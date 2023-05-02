import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {motInterdit} from "../../../assets/Models/motInterdit";
import {MotInterditService} from "../../Services/mot-interdit.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-mot',
  templateUrl: './add-mot.component.html',
  styleUrls: ['./add-mot.component.css']
})
export class AddMotComponent {
  bad: motInterdit =new motInterdit(0, "a");

  constructor(private service:MotInterditService,private router:Router) { }

  public addMotInterdit()
  {
    this.service.addMotInterdit(this.bad).subscribe(()=>this.router.navigateByUrl("user/badWr"))

  }
}




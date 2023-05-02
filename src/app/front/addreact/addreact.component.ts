import { Component } from '@angular/core';
import {reaction} from "../../../assets/Models/reaction";
import {ReactionService} from "../../Services/reaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addreact',
  templateUrl: './addreact.component.html',
  styleUrls: ['./addreact.component.css']
})
export class AddreactComponent {
  react:reaction=new reaction();
constructor(private service:ReactionService,private router:Router) {
}

 public addreact()
{
 this.service.addReact(this.react).subscribe(()=>this.router.navigateByUrl("user/reaction"))

}
}

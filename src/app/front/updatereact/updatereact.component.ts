import {Component, OnInit} from '@angular/core';
import {ReactionService} from "../../Services/reaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {reaction} from "../../../assets/Models/reaction";

@Component({
  selector: 'app-updatereact',
  templateUrl: './updatereact.component.html',
  styleUrls: ['./updatereact.component.css']
})
export class UpdatereactComponent implements OnInit{
  react:reaction=new reaction();
  data:any;

  constructor(private service:ReactionService,private router:Router ,private  root:ActivatedRoute) {
  }
  updatereact(){

    this.service.upadateReact(this.react).subscribe(()=>this.router.navigateByUrl("user/reaction"))
  }

  ngOnInit(): void {
    let id=this.root.snapshot.params['id'];
    this.service.getbyid(id).subscribe(data=>this.react=data)
  }
}

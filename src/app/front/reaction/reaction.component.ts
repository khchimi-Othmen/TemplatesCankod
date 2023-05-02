import {Component, OnInit} from '@angular/core';
import {reaction} from "../../../assets/Models/reaction";
import {ReactionService} from "../../Services/reaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit{
  listreac!: reaction[];
  constructor(private service:ReactionService,private router:Router) { }
  ngOnInit(): void {
    this.service.getreaction().subscribe(listreac=>this.listreac=listreac);

  }
delete(id:number){
    this.service.deleteReact(id).subscribe(()=>this.service.getreaction().subscribe(res=>this.listreac=res));
}
update(id:number){
    this.router.navigate(['/user/updatereact',id]);
}

}

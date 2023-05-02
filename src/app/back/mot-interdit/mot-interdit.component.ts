import {Component, OnInit} from '@angular/core';
import {reaction} from "../../../assets/Models/reaction";
import {ReactionService} from "../../Services/reaction.service";
import {Router} from "@angular/router";
import {motInterdit} from "../../../assets/Models/motInterdit";
import {MotInterditService} from "../../Services/mot-interdit.service";
import {Location} from '@angular/common'
@Component({
  selector: 'app-mot-interdit',
  templateUrl: './mot-interdit.component.html',
  styleUrls: ['./mot-interdit.component.css']
})
export class MotInterditComponent implements OnInit{
  listmot: any[]=[];
  message: any;
  bad: motInterdit =new motInterdit(0, "a");
  constructor(private service:MotInterditService,private router:Router,private location :Location) { }
  ngOnInit(): void {
    this.findMots();
    //this.service.getMotInterdits().subscribe(listmot=>this.listmot=listmot);

  }
  findMots(){
    this.service.getMotInterdits().subscribe(data=>{this.listmot=data as any[];})
  }

  deleteMot(idMot:number){
    this.service.deleteMotInterdit(idMot).subscribe(()=>this.service.getMotInterdits().subscribe(m=>this.listmot=m));
  }

AddMots(){
  let resp = this.service.addMotInterdit(this.bad);
  resp.subscribe((data) => {
    this.message = data;
    this.location.replaceState('/admin/badWr');
    location.reload();
  });
}
}


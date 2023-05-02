import {Component, OnInit} from '@angular/core';
import {publication, TypePublication} from "../../../assets/Models/publication";
import {PublicationService} from "../../Services/publication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {user} from "../../../assets/Models/user";

@Component({
  selector: 'app-updatepub',
  templateUrl: './updatepub.component.html',
  styleUrls: ['./updatepub.component.css']
})
export class UpdatepubComponent implements OnInit{
  pub:publication= new publication(1,"",0,"",new Date(),TypePublication.PHOTO);
  data:any;
  constructor(private service:PublicationService,private router:Router , private root:ActivatedRoute) {
  }

  ngOnInit(): void {
    let id=this.root.snapshot.params['id'];
    this.service.getbyid(id).subscribe(data=>this.pub=data)
  }

  updatepublication(){
    this.service.upadatePublication(this.pub).subscribe(()=>this.router.navigateByUrl("user/post"))
  }
}

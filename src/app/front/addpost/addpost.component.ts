import { Component } from '@angular/core';
import {PublicationService} from "../../Services/publication.service";
import {Router} from "@angular/router";
import {publication, TypePublication} from "../../../assets/Models/publication";
import {NgForm} from "@angular/forms";
import {postImg} from "../../../assets/Models/postImg";
//import { TypePublication } from 'path/to/TypePublication';
import {Location} from '@angular/common'

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  pub:publication= new publication(1,"",0,"",new Date(),TypePublication.PHOTO);
  request!: string;
  file!: File;
 constructor(private service:PublicationService,private location :Location, private router:Router) {
 }
// add pub with img
  addpost(form: NgForm) {
    console.log("CHEDYA FOR THE WIN");

    const formData = new FormData();
    formData.append('request', this.request);
    formData.append('file', this.file);
    const formValue=form.value;
    console.log(form.value);

    let myPublication: postImg = {
      content: formValue.content,
      pubDate : new Date(Date.now()),
      typePublication: formValue.typePublication
    };

    this.service.addPublication(myPublication,this.file)
      .subscribe((response: any) => {
        console.log(response);

      });
    this.location.replaceState('user/post');
    location.reload();
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

}

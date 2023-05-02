import {Component, OnInit} from '@angular/core';
import {PublicationService} from "../../Services/publication.service";
import {publication, TypePublication} from "../../../assets/Models/publication";
import {Router} from "@angular/router";
import {CommentaireService} from "../../Services/commentaire.service";
import {Location} from "@angular/common";
import {commentaire} from "../../../assets/Models/commentaire";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit{
  commentaire : commentaire = new commentaire(0,"",new Date())
  message:any;
  listcomments: any[]=[];
listPub!: publication[];
currentPage = 1;
itemsPerPage = 6;
  constructor(private service:PublicationService,private serviceCom:CommentaireService,private location: Location,private router:Router) { }
  ngOnInit(): void {
    this.service.getpublication().subscribe((data)=>{
    console.log(data);
    this.listPub = data;
       this.findcomments();
  }
    );
  }
  TypePublication = TypePublication; // add this line to expose TypePublication to the template
  /*
  delete(id:number){
    this.service.deletePublication(id).subscribe(()=>this.service.getpublication().subscribe(post=>this.listPub=post));
  }
   */

  deletePublication(id: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.service.deletePublication(id).subscribe(() => {
        this.listPub = this.listPub.filter(pub => pub.idPub !== id);
      });
    }
  }

  update(id:number){
    this.router.navigate(['/user/updatePost',id]);
  }
  ///////
  commentPublication(pub: any) {

  }

  likePublication(pub: any) {
    pub.likeCount =pub.likeCount ? pub.likeCount + 1 : 1;
  }

  get totalPages(): number[] {
    const totalProducts = this.listPub.length;
    const totalPages = Math.ceil(totalProducts / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  Commentaire(){
    let resp = this.serviceCom.addComment(this.commentaire);
    resp.subscribe((data) => {
      this.message = data;
      this.location.replaceState('/user/post');
      location.reload();
    });
  }

  findcomments(){
    this.serviceCom.getComments().subscribe(data=>{this.listcomments=data as any[];})
  }
}


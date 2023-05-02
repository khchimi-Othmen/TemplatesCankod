import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { BadWordsService } from '../bad-words.service';
import { badwords } from '../modules/badwords';
@Component({
  selector: 'app-bad-words',
  templateUrl: './bad-words.component.html',
  styleUrls: ['./bad-words.component.css']
})
export class BadWordsComponent implements OnInit{
  BadwordsList: any[] = [];
  message:any;

  badwords : badwords=new badwords(
    0,
    "");
  constructor(private service : BadWordsService,private location: Location){  }

  ngOnInit() {
    this.getBadWords();
    
  }
  public getBadWords() {
    this.service.FindBadWords().subscribe(data => {
      this.BadwordsList = data as any[];
    });
  }
    Badwords() {
      let resp = this.service.addBadWords(this.badwords);
      resp.subscribe((data) => {
        this.message = data;
        this.location.replaceState('/admin/Badwords');
        location.reload();
      });
    }
  deleteBadWords(idBadWords: number) {
    this.service.Delete(idBadWords).subscribe(
      response => {
        console.log("Feedback deleted successfully.");
        // Update the feedbackList after successful deletion
        this.getBadWords();
      },
      error => {
        console.log("Error while deleting feedback:", error);
      }
    );
  }
  public onUpdate(badwords: badwords) {
    this.badwords = badwords;
  }
  
}

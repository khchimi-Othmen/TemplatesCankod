import { Component,OnInit } from '@angular/core';
import { prioritywords } from '../modules/prioritywords';
import { PriorityWordsService } from '../priority-words.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-priority-words',
  templateUrl: './priority-words.component.html',
  styleUrls: ['./priority-words.component.css']
})
export class PriorityWordsComponent implements OnInit{
  PriorityWordsList: any[] = [];
  message:any;

  prioritywords : prioritywords=new prioritywords(
    0,
    "");
  constructor(private service : PriorityWordsService,private location: Location){  }

  ngOnInit() {
    this.getPriorityWords();
    
  }
  public getPriorityWords() {
    this.service.FindPriorityWords().subscribe(data => {
      this.PriorityWordsList = data as any[];
    });
  }
  PriorityWords() {
    let resp = this.service.addPriorityWords(this.prioritywords);
    resp.subscribe((data) => {
      this.message = data;
      this.location.replaceState('/admin/PriorityWords');
      location.reload();
    });
  }
  deletePriorityWords(IdWord: number) {
    this.service.Delete(IdWord).subscribe(
      response => {
        console.log("Word deleted successfully.");
        // Update the feedbackList after successful deletion
        this.getPriorityWords();
      },
      error => {
        console.log("Error while deleting word:", error);
      }
    );
  }
  public onUpdate(prioritywords: prioritywords) {
    this.prioritywords = prioritywords;
  }
  
}

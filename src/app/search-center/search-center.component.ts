import { Center } from './../model/Center';
import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';

@Component({
  selector: 'app-search-center',
  templateUrl: './search-center.component.html',
  styleUrls: ['./search-center.component.css']
})
export class SearchCenterComponent implements OnInit {
 name:any;                                                          
 centers:any;
 editing = false;
 Center:Center=new Center("",0,"",0,0);
 
  constructor( private service:CenterService){}
  public deleteCenter(id:number){
   let resp= this.service.deleteCenter(id);
    resp.subscribe((data)=>this.centers=data);
  }
  public SearchCenter(){
   
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.centers=this.centers.filter((res:{name:string;})=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
   
   }
   editCenter(center: Center) {
  
    this.Center = center;
    this.editing = true;
  }
  registerNow() {
    this.service.updateCenter(this.Center)
      .subscribe(() => {
        this.editing = false;
        this.Center = new Center("",0,"",0,0);
        this.loadCenters();
      });
  }
  loadCenters(){
    let resp= this.service.getAllCenters();
    resp.subscribe((data)=>this.centers=data);  
  }
ngOnInit(){
  let resp= this.service.getAllCenters();
  resp.subscribe((data)=>this.centers=data);

}

}

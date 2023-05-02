import { CenterService } from '../center.service';
import { Center } from './../model/Center';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  Center:Center=new Center("",0,"",0,0);
 message:any;
  constructor( private service:CenterService){}
ngOnInit(){}
public registerNow(){
 let resp = this.service.addCenter( this.Center);
 resp.subscribe((data)=>this.message=data);
 alert("add Successfully")
}
}

import { Component, OnInit } from '@angular/core';
import {Pathserviceservice} from '../pathservice.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  providers:[Pathserviceservice]
})
export class Page2Component implements OnInit {

 

     result:any;
     postObjData:any;
     updateData: any;
     id:any;
  constructor(private getService: Pathserviceservice) { 
        this.onGet();
        
    }
  onGet(){
        alert('Working');
        this.getService.getData().subscribe((data:any)=>{
            this.result = { ...data };
            console.log(this.result);
        });
  }
  createData(){
        this.postObjData = {
        "id": 2,
        "title": "postdata Value 3",
        "author": "alekhya"
      };
      this.getService.createemployee(this.postObjData).subscribe(()=>{
            
            console.log("successfullyupdated");
            debugger;
        });
    }
   /* delete(){
        this.id = 2;
        this.getService.delete(this.id).subscribe((data:any)=>{
            
            debugger;
        });
    }
    update(){
        this.updateData = {
        "title": "updated",
        "author": "sabarynathan"
      };
      this.id =3
      debugger;
        this.getService.update(this.updateData,this.id).subscribe((data:any)=>{
            data.title = this.updateData.title;
            data.author = this.updateData.author;
        });*/

 

 

 

    
  
  ngOnInit(): void {
  }
	}
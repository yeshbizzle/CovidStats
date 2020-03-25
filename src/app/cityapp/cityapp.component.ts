import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';
import {FyleService} from 'src/app/fyle.service';
/* export interface City {
    value: string;
    viewValue: string;
  } */
  
@Component({
  selector: 'app-cityapp',
  templateUrl: './cityapp.component.html',
  styleUrls: ['./cityapp.component.css']
})
export class CityappComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'roadmap';
   p: number = 1;
    pageSize:number=10; 
    objDate;
    view:boolean=true;
    value;
   /* show:boolean=false;
   view:boolean=false;
   all:boolean=true; */
  //  details=[];
/*     city: City[] = [
        {value: 'MUMBAI', viewValue: 'Mumbai'},
        {value: 'BANGALORE', viewValue: 'Bangalore'},
        {value: 'CHENNAI', viewValue: 'Chennai'},
        {value: 'KOLKATTA', viewValue: 'Kolkatta'},
        {value: 'HYDERABAD', viewValue: 'Hyderabad'}
      ]; */
threads;
country=[];
countryBy;
countryInfo;
  constructor(private httpClient: HttpClient, private router: Router, private fyle: FyleService) { 
    //this.pageSize=20;
    this.objDate = Date.now(); 
  }

  ngOnInit() {
    
this.onThreads();
this.onContry();
  }
  onThreads() {
 
    this.fyle.getData().subscribe(
      
      (data) => { this.threads = data as string[];
    
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }, () => { }
    );
  //  this.show=true;
  } 
  onContry() {
 
    this.fyle.getDataAll().subscribe(
      
      (data) => { this.country = data as string[];
    
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }, () => { }
    );
  //  this.show=true;
  } 
  onSearch(name){
    this.view=false;
    this.fyle.getDataAllBy(name).subscribe(
      (data) => {
       
       
        this.countryBy = data as string[];
      
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }, () => { }
    );
  }
/*   onKeydownEvent(value){
if(value.value==""){
    this.pageSize=20;
}else
{
this.pageSize=value.value;
}
  }
  get(data){
      this.details=data;
      this.view=true;
      this.all=false;
  }
  back(){
      this.all=true;
      this.view=false;
  } */
  clear(){
    this.view=true;
    this.countryBy=null;
    this.onContry();
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api-service.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  storedEvents: any;

  nodata:boolean=false;
  constructor(private apiService:ApiService,  private sharedService: SharedService) {}

  ngOnInit() {
    // sessionStorage.setItem('email', 'sktiwari1125@gmail.com');

    this.getSearchResults()
  }

  getSearchResults(): void {
    const email=sessionStorage.getItem('email');
 this.apiService.getPaymentHistoryByEmail('sktiwari1125@gmail.com').subscribe(res=>{
  console.log(res)
  if(res==null){
  this.nodata=true;
  console.log(this.nodata);
  }else{
    this.nodata=false;
  }
  this.storedEvents=res;
 })}
}

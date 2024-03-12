import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api-service.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  storedEvents: any;

  nodata:boolean=false;
  userId: string;
  newEvents: any;
  constructor(private apiService:ApiService,  private sharedService: SharedService) {}

  ngOnInit() {
    this.userId=localStorage.getItem('userId');
    console.log(this.userId);

    this.getSearchResults()
  }
  hasUpcomingPayments(events: any[]): boolean {
    return events.some(result => result.upcomingPayment > 0);
  }

  getSearchResults(): void {
    const email=sessionStorage.getItem('email');
 this.apiService.getUserDataByEmail(email).subscribe(res=>{
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

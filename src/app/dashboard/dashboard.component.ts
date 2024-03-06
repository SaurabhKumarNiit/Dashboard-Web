import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'
import { jwtDecode } from 'jwt-decode';
import * as Chartist from 'chartist';
import { SharedService } from '../Services/shared.service';
import { ApiService } from '../Services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: Date | null;
  tokenFromLogin: string='';
  authToken: string='';
  decodeData: any;
  greetingMessage: string;
  public myAngularxQrCode: string = 'null';
  constructor(private apiService:ApiService,  private sharedService: SharedService) {}

  userDetailsArray: any[] = [];
  paymentHistoryArray:any[]=[];

  dataAvailable: boolean = false;
 Eventlength:number=0;



  ngOnInit() {

      this.authToken = sessionStorage.getItem('current-token');
      // this.decodeData=jwtDecode(this.authToken as string)
      this.setGreetingMessage();

      this.getUserData();
      this.getPaymentHistory();
  }

  getUserData(){
this.apiService.getAllUserData().subscribe(res=>{
  console.log(res);
  this.userDetailsArray=res;
})
}

  getPaymentHistory(){
    this.apiService.getPaymentHistory().subscribe(res=>{
      console.log(res);
      this.paymentHistoryArray=res;
    })
  }


  setGreetingMessage() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greetingMessage = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greetingMessage = 'Good Afternoon';
    } else {
      this.greetingMessage = 'Good Evening';
    }
    console.log('Greeting Message:', this.greetingMessage);
  }
  

}

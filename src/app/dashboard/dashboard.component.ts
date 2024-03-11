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
  totalStudent: any;
  constructor(private apiService:ApiService,  private sharedService: SharedService) {}

  userDetailsArray: any[] = [];
  paymentHistoryArray:any[]=[];

  dataAvailable: boolean = false;
 Eventlength:number=0;

 totalReceivedAmount: number = 0;
 totalSuccessPayment: number = 0;
 totalPendingPayment: number = 0;




  ngOnInit() {

      this.authToken = sessionStorage.getItem('current-token');
      // this.decodeData=jwtDecode(this.authToken as string)
      this.setGreetingMessage();

      this.getUserData();
      this.getPaymentHistory();
      this.calculateTotalReceivedAmount();
  }

  getUserData(){
this.apiService.getAllUserData().subscribe(res=>{
  console.log(res);
  this.userDetailsArray=res;
  this.totalStudent=res.length;
})
}

  getPaymentHistory(){
    this.apiService.getPaymentHistory().subscribe(res=>{
      console.log(res);
      this.paymentHistoryArray=res;
    })
  }

  calculateTotalReceivedAmount(): void {
    // Iterate through the payment history array
    for (const paymentEntry of this.paymentHistoryArray) {
      // Check if the payment entry has a paymentAmount property
      if (paymentEntry.amount) {
        // Add the payment amount to the totalReceivedAmount
        this.totalReceivedAmount += paymentEntry.amount;
      }
    }
    for (const paymentEntry of this.paymentHistoryArray) {
      // Check if the payment entry has a paymentAmount property
      if (paymentEntry.status=='paid') {
        // Add the payment amount to the totalReceivedAmount
        this.totalSuccessPayment += 1;
      }else{
        this.totalPendingPayment +=1;
      }
    }

    // Now totalReceivedAmount contains the sum of all payment amounts
    console.log('Total Received Amount:', this.totalReceivedAmount);
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

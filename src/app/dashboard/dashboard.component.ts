import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'
import { jwtDecode } from 'jwt-decode';
import * as Chartist from 'chartist';
import { ApiService } from '../Services/api-service.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: Date | null;
  tokenFromLogin: string='';
  authToken!: string | null;
  decodeData: any;
  greetingMessage: string;
  public myAngularxQrCode: string = 'null';
  constructor(private apiService:ApiService,  private sharedService: SharedService) {}

  pastEventsArray: any[] = [];
  upcomingEventsArray:any[]=[];

  dataAvailable: boolean = false;
 Eventlength:number=0;

generateQr(){
  QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
    if (error) console.error(error)
    console.log('success!');
  })
}

  ngOnInit() {

      this.authToken = localStorage.getItem('token');
      this.decodeData=jwtDecode(this.authToken as string)
  

    this.setGreetingMessage();
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

import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'

@Component({
  selector: 'app-qr-display',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRDisplay implements OnInit {

 public myAngularxQrCode: string = 'Hello';
  constructor() { this.myAngularxQrCode = 'https://www.npmjs.com/package/angularx-qrcode';}
  
  generateQr(){
    QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  }

  ngOnInit() {
    this.generateQr();
  }

}

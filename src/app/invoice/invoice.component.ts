// invoice.component.ts
import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { ApiService } from '../Services/api-service.service';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  userEmail: string = 'user@example.com';
  paymentDetails: any; // Replace with your payment details type
  userInfo: any; // Replace with your user info type

  constructor(
   private apiservice:ApiService
  ) {}

  ngOnInit(): void {
    console.log('InvoiceComponent initialized');
    
    this.userEmail=sessionStorage.getItem('email');
    // Fetch user payment details
    this.apiservice.getPaymentHistoryByEmail(this.userEmail).subscribe((details: any) => {
      this.paymentDetails = details;

      // Fetch user information
      this.apiservice.getUserDataByEmail(this.userEmail).subscribe((info: any) => {
        this.userInfo = info;

        // Generate and download the PDF invoice
        this.generateInvoice();
      });
    });
  }

  generateInvoice(): void {
    const content = this.createInvoiceHTML();

    const options = {
      margin: 10,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(content).set(options).outputPdf(pdf => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  }

  createInvoiceHTML(): string {
    // Replace with your HTML template
    return `
      <div>
        <h1>Invoice</h1>
        <!-- Add user and payment details here -->
        <p>User Email: ${this.userEmail}</p>
        <!-- ... other details ... -->
      </div>
    `;
  }
}

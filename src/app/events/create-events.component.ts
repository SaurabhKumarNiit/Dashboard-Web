import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../Services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaypalService } from '../Services/paypal.service';
import { CurrencyService } from '../Services/currency.service';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrl: './create-events.component.scss'
})
export class CreateEventsComponent {

  
  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private router: Router,
    private paypalService:PaypalService,
    private currencyService: CurrencyService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute
    // private sharedService:SharedService
  ) {}
isEditable:boolean = false;
paymentState:boolean=false;
  data: any;
  userBookedSlot:any;
  billAmount:any='00';
  billAmountForPaypal:number=12000;
  userEmail:any;
  customerName:any;
  MobileNo:any;
  readyToVerify:boolean=false;
  readyToPay:boolean=false;
  hideToPay:boolean=true;

  isLoading: boolean = false;
  generatedAccessToken:any;


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  // navigateToRegister(){
  //   this.router.navigateByUrl('/register');
  // }

  paymentForPaypal(){
    this.paypalService.getAccessToken().subscribe(response=>{

      this.generatedAccessToken=response.access_token;
      console.log(this.generatedAccessToken);
    })
  }
urlTokenId:any='69B882176G643890K';
  ngOnInit(): void {
    this.paymentForPaypal();

//     const url = 'https://example.com/return?token=6GT69374B0243392R&PayerID=9L5ZFFG8LPWSS';

// const urlObject = new URL(url);

// // Get the values of 'token' and 'PayerID' from the URL
// const token = urlObject.searchParams.get('token');
// const payerId = urlObject.searchParams.get('PayerID');

// console.log('Token:', token);
// console.log('PayerID:', payerId);

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const payerId = params['PayerID'];

      console.log('Current Token:', token);
      console.log('PayerID:', payerId);


      setTimeout(()=>{
        this.submitPayment(token);
      },1000)
    });
  
    // this.initForm();
  }
dataPayment:any={  id: " ",
intent: "CAPTURE",
status: "COMPLETED",};
  submitPayment(token:any){
    this.dataPayment.id=token;
    console.log(this.dataPayment.id);
    this.paypalService.approveOrder(token,this.dataPayment,this.generatedAccessToken).subscribe(res=>{
      console.log(res);
      Swal.fire("Payment Completed, done");
    })
  }

}

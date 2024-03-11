import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var Razorpay: any;
import * as $ from 'jquery';
import { ApiService } from '../Services/api-service.service';
import { PaypalService } from '../Services/paypal.service';
import { CurrencyService } from '../Services/currency.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(MatStepper, { static: false }) stepper: MatStepper;

  checkoutDisable:boolean=true;
  usdAmount: number=0;
  isLinear = false;
  durationInSeconds = 5;
  otpCheck=true;
  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private router: Router,
    private paypalService:PaypalService,
    private currencyService: CurrencyService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private renderer2:Renderer2
    // private sharedService:SharedService
  ) {}
isEditable:boolean = false;
paymentState:boolean=false;
  data: any;
  userBookedSlot:any;
  billAmount:any='';
  billAmountForPaypal:number=12000;
  userEmail:any;
  customerName:any;
  MobileNo:any;
  readyToVerify:boolean=false;
  readyToPay:boolean=true;
  hideToPay:boolean=true;

  isLoading: boolean = false;
  generatedAccessToken:any;

  additionalAmount:any={amount0:'3000',amount1:'5000',amount2:'7000',amount3:'10000',amount4:'20000',amount5:''}
   
 
  

  isInputEmpty = true;

  onInputChange() {
    this.isInputEmpty = this.billAmount === undefined || this.billAmount === null || this.billAmount.toString().trim() === '';
    console.log(this.isInputEmpty);
  }



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });



  navigateToRegister(){
    this.router.navigateByUrl('/register');
  }

  paymentForPaypal(){
    this.paypalService.getAccessToken().subscribe(response=>{

      this.generatedAccessToken=response.access_token;
      console.log(this.generatedAccessToken);
    })
  }
urlTokenId:any;
  ngOnInit(): void {

    const url = 'https://example.com/return?token=6GT69374B0243392R&PayerID=9L5ZFFG8LPWSS';

// Create a URLSearchParams object from the URL
const urlObject = new URL(url);

// Get the values of 'token' and 'PayerID' from the URL
const token = urlObject.searchParams.get('token');
const payerId = urlObject.searchParams.get('PayerID');

// Log the values to the console or use them as needed
console.log('Token:', token);
console.log('PayerID:', payerId);

    // this.route.queryParams.subscribe(params => {
    //   this.urlTokenId = params['token'];
    //   const payerId = params['PayerID'];

    //   console.log('Token:', this.urlTokenId);
    //   console.log('PayerID:', payerId);

    // });

    this.convert();
    this.paymentForPaypal();
    // this.sharedService.currentToken.subscribe((GeneretedId: string) => {
    //   this.userBookedSlot = GeneretedId;
    // });

    // console.log(this.userBookedSlot);
    this.initForm();
  }
  updateBillAmount(value: any) {
    this.billAmount = value;

    if(value==''){
      this.isInputEmpty=true;
    }else{
      this.isInputEmpty=false;
    }
  }
  // "studentName": null,
  // "yearOfStudy": null,
  // "address": null,
  // "demoTime": null,
  // "email": "sktiwari1125@gmail.com",
  // "phoneNo": null,
  // "totalAmount": null,
  // "bookedSlot": null,
  // "paymentHistory": null

  orderForm!: FormGroup;



  initForm(): void {
    this.orderForm = this.fb.group({
      intent: ['CAPTURE', Validators.required],
      purchase_units: this.fb.array([
        this.fb.group({
          items: this.fb.array([
            this.createItemFormGroup(),
          ]),
          amount: this.fb.group({
            currency_code: ['USD', Validators.required],
            value: ['144.72', Validators.required],
            breakdown: this.fb.group({
              item_total: this.fb.group({
                currency_code: ['USD', Validators.required],
                value: ['144.72', Validators.required],
              }),
            }),
          }),
        }),
      ]),
      application_context: this.fb.group({
        return_url: ['https://saurabhkumarniit.github.io/Dashboard-Web/#/thank-you', Validators.required],
        cancel_url: ['https://example.com/cancel', Validators.required],
      }),
    });
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: ['Books', Validators.required],
      description: ['12 th', Validators.required],
      quantity: ['1', Validators.required],
      unit_amount: this.fb.group({
        currency_code: ['USD', Validators.required],
        value: ['144.72', Validators.required],
      }),
    });
  }
redurectedLink:any;
readyLink:any;
  onSubmit(): void {
    // Handle form submission
    this.paymentState=true;
    this.convert();
    this.paypalService.createOrder(this.orderForm.value,this.generatedAccessToken).subscribe(res=>{

      // console.log(res.body.links.map((value:any)=>{console.log(value)}));
      this.urlTokenId=res.body.id;
      console.log(this.urlTokenId);

      const desiredLinks = res.body.links.filter((link: { rel: string; }) => link.rel === 'approve');
       console.log(desiredLinks);
       this.redurectedLink=desiredLinks;
       const hrefString = desiredLinks.map((link: { href: any; }) => link.href).join(', ');
      console.log(hrefString);
       this.readyLink=hrefString;


    })
    // if (this.orderForm.valid) {
    //   const formData = this.orderForm.value;
    //   console.log(formData);
    // }
  }
dataPayment:any={}

  submitPayment(){
    this.paypalService.approveOrder(this.urlTokenId,this.dataPayment,this.generatedAccessToken).subscribe(res=>{
      console.log(res);
    })
  }

  openLink(){
    window.open(this.readyLink, '_blank');
  }

  convert(): void {
    this.usdAmount = this.currencyService.convertINRtoUSD(this.billAmountForPaypal);
    console.log(this.usdAmount);
  }
  noNumbersValidator(control) {
    const hasNumbers = /\d/.test(control.value);
    return hasNumbers ? { 'noNumbers': true } : null;
  }

  get f() {
    return this.registrationForm.controls;
  }

  registrationForm = this.fb.group({
    studentName: ['', [Validators.required, Validators.minLength(2), this.noNumbersValidator]],
    parentName: [''],
    totalAmount: [''],
    email: ['', [Validators.required, Validators.email]],
    yearOfStudy: [''],
    address: [''],
    demoTime: [''],
    phoneNo: ['',[Validators.required, Validators.pattern(/^[0-9]+$/)]],
    paymentMethod:['']
  });

  get studentName() {
    return this.registrationForm.get('studentName');
  }
  get yearOfStudy() {
    return this.registrationForm.get('yearOfStudy');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get demoTime() {
    return this.registrationForm.get('demoTime');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phoneNo() {
    return this.registrationForm.get('phoneNo');
  }
  get totalAmount() {
    return this.registrationForm.get('totalAmount');
  }
  // get bookedSlot() {
  //   return this.registrationForm.get('bookedSlot');
  // }

  otpForm = this.fb.group({
    otp: ['', [Validators.required]]
  })

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  onOtpVerify(){
    this.otpCheck=false;
    console.log(this.otpCheck);
  }
  get otp() {
    return this.otpForm.get('otp');
  }

  get otpValidation() {
    return this.otpForm.controls;
  }

  checkData(){
    // console.log(this.readyToVerify);

    if( this.readyToVerify==false){
      this.readyToVerify=true;
    }
    else{
      this.readyToVerify=false;
    }
  }

  verifydata() { 
   
      if(this.registrationForm.valid){
        this.service
        .registerCustomer({
          studentName: this.studentName?.value,
          email: this.email?.value,
          phoneNo: this.phoneNo?.value,
          totalAmount:this.totalAmount?.value,
          yearOfStudy:this.yearOfStudy?.value,
          demoTime:this.demoTime?.value,
          address:this.address?.value
        })
        .subscribe(
          (data) => {
            console.log(data);
            localStorage.setItem('email',data.email);
            this.billAmount=data.totalAmount;
            this.userEmail=data.email;
            this.customerName=data.studentName;
            this.MobileNo=data.phoneNo;
  
            this.readyToVerify=true;
            // this._snackBar.open('OTP Send On Registered Email', 'Success', {
            //   duration: 4000,
            // });
            this._snackBar.open('OTP Send On Registered Email', 'Close', {
              duration: 4000,
              panelClass: ['success-snackbar'],
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            
            // this.paymentStart();
            // this.send();
            this.registrationForm.reset();
            // this.isLoading=false;
            this.isLoading=true;
            // this.route.navigateByUrl('/login');
          },
          (error) => {
            // this._snackBar.open('Something went wrong!', 'Error', {
            //   duration: 4000,
            // });
            this._snackBar.open('Something went wrong!', 'Close', {
              duration: 5000,
              panelClass: ['error-snackbar'],
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            // this.isLoading=false;
          }
        );
      }
      else{
        this._snackBar.open('Fill Required Details!', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }

  }

  triggerButtonClick() {
    this.stepper.next();
  }

  verifyOtp() { 
    // this.isLinear=false;
 if(this.otpForm.valid){
  this.service
  .verifyOtp({
    otp: this.otp?.value,
  })
  .subscribe(
    (data) => {
      console.log(data);

      // this.readyToVerify=true;
      this._snackBar.open('OTP Verified', 'Close', {
        duration: 4000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.readyToPay=true;
      this.otpCheck=false;

      // setTimeout(()=>{
      //   this.isLinear=true;
      // },3000)
      // this.send();
      this.triggerButtonClick();
      this.otpForm.reset();
      this.hideToPay=false;
      

    },
    (error) => {
      this.otpCheck=true;
      // this.isLinear=true;
      this._snackBar.open('Please Enter Correct OTP!', 'Close', {
        duration: 4000,
        panelClass: ['error-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  );
 }else{
  this._snackBar.open('Form Not Valid!', 'Close', {
    duration: 4000,
    panelClass: ['error-snackbar'],
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
 }
  }

  paymentConfirm() { 
    this.paymentStart();

  }

  // async send(){
  //   emailjs.init('-gTT_FrwJfkh1js-B');
  //  let response = await emailjs.send("service_2fjea4f","template_ii6fto9" ,{
  //     from_name:'Admin',
  //     to_name:this.registrationForm.value.studentName,
  //     form_email:this.registrationForm.value.email,
  //     totalAmount:this.registrationForm.value.totalAmount,
  //     subject:'Admin Greetings',
  //     message:'Thank You For Using Our Service'
  //   });
  // }


  paymentStart(){
    console.log("payment started --")
    let amount= this.billAmount;
    console.log(amount);
  
  $.ajax(
    {
      url:'http://localhost:8181/payment/create_order/'+(this.userEmail),
      data:JSON.stringify({amount:amount,info:'order_request'}),
      contentType:'application/json',
      type:'POST',
      dataType:'json',
      success:function(response){
        console.log(response);
  
        if(response.status=="created"){
  
          let options={
            key:'rzp_test_LP91fzOg59Pohi',
            amount:response.amount,
            currency:'INR',
            name:'Admin Payment Gateway',
            description:'No Worries its Secure Payment',
            image:'https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-payment-icon-png-image_313445.jpg',
            order_id:response.id,
            "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
  
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
  
              // console.log("payment successfull !!");
              // alert("Hurray ! Payment Done");
              updatePaymentOnServer(
                response.razorpay_payment_id,
                response.razorpay_order_id,
                "paid"
                );
            
              // Swal.fire(
              //   'Payment Done',
              //   'Your Order placed check your mail for order information',
              //   'success'
              // )
          
             
          },
          prefill:{
  
            name:this.customerName,
  
            email:this.userEmail,
  
            contact:this.MobileNo
  
          },
          notes:{
            address:"India MP"
          },
          theme:{
            color:"#3399cc"
          }
    
          };
  
          var rzp = new Razorpay(options);
          // this.emptycart();
  
         rzp.on('payment.failed',function(response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; }; payment_id: any; }; }){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id)
            alert(response.error.payment_id)
            // alert("Oops payment failed !!!!!!")
         })
           rzp.open();

        }
      },
    
       error:function(error){
         console.log(error)
        //  alert("sonthing went wrong !!")
       }
    }
  )
  function updatePaymentOnServer(payment_id: any, order_id: any, status: any) {
    const self = this; // Preserve the component context
  
    $.ajax({
      url: 'http://localhost:8181/payment/update_order',
      data: JSON.stringify({ payment_id: payment_id, order_id: order_id, status: status }),
      contentType: 'application/json',
      type: 'POST',
      dataType: 'json',
      success: function (response) {
        console.log(response);
        self.router.navigateByUrl('https://saurabhkumarniit.github.io/Dashboard-Web/#/thank-you');
        self._snackBar.open('Payment Success', 'Close', {
          duration: 1000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: function (error) {
        self._snackBar.open('Something went wrong!', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }
  
  
  
  };

}

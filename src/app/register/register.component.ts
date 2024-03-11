import { Component, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiService } from '../Services/api.service';
import { SharedService } from '../Services/shared.service';
import Swal from 'sweetalert2';
import { ApiService } from '../Services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  accessToken: any;
  data: any;
  constructor(
    // private service: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private sharedService: SharedService,
    private apiservice:ApiService
  ) { }

  requestOTP: any = {};
  tokenFromLogin: string = '';

  timer: number = 30;
  intervalId: any;

  ngOnInit(): void {

    this.sharedService.currentToken.subscribe((token) => {
      this.tokenFromLogin = token;
      // console.log('Token received in OtpVerifyComponent:', this.tokenFromLogin);
    });
}
noNumbersValidator(control) {
  const hasNumbers = /\d/.test(control.value);
  return hasNumbers ? { 'noNumbers': true } : null;
}
registrationForm = this.fb.group({
  userName: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  phoneNo: [
    '',
    [
      Validators.required,
      Validators.pattern(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      ),
    ],
  ],
  password: [
    '',
    [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      ),
    ],
  ],
});
get f() {
  return this.registrationForm.controls;
}
// submitData(){
// console.log(this.registrationForm.value);
// this.apiservice.registerCustomer(this.registrationForm.value).subscribe(res=>{
//   console.log(res);
// this.router.navigateByUrl('/login');

// })
// }
submitData() {
  console.log(this.registrationForm.value);
if(this.registrationForm.valid){
  this.apiservice.authenticationRegisterCustomer(this.registrationForm.value).subscribe(
    (res: any) => {
       console.log(res);
      //  sessionStorage.setItem('current-token',res.body.token);
      this.data = res;
      // this.accessToken = res.headers.get('Verification');
      // console.log(this.accessToken);
      // sessionStorage.setItem('email', this.loginUser.sEmail);

      if(res.error=='Already Reported'){
        Swal.fire({
          icon: 'error',
          title: 'Failed...',
          text: 'Already Registered Please Login with your Credintials!',
        });
      }else{
        Swal.fire({
          title: 'Regiteration Successfully Now you Login with your Credintials',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });

        this.registrationForm.reset;

        setTimeout(()=>{
        this.router.navigateByUrl('/login');
        },1000)
      }


  
      // this.router.navigateByUrl('/dashboard');
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Failed...',
        text: 'Oops Somthing Went Wrong!',
      });
    }
  );
}else{
  Swal.fire({
    icon: 'error',
    title: 'Failed...',
    text: 'All Fields Are Required For Registration!',
  });
}

  

  // console.log('Response from server:', this.loginUser);
  // console.log('Response from server:', this.requestOTP);
}
  
  resendOtp(){
this.router.navigateByUrl('/login');
    this.timer = 30;
    // this.startTimer();
  }
}

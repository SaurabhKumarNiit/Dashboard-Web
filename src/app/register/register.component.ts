import { Component, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiService } from '../Services/api.service';
import { SharedService } from '../Services/shared.service';
import Swal from 'sweetalert2';

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
    private sharedService: SharedService
  ) { }

  requestOTP: any = {};
  tokenFromLogin: string = '';

  timer: number = 30;
  intervalId: any;

  ngOnInit(): void {
    this.startTimer();

    this.sharedService.currentToken.subscribe((token) => {
      this.tokenFromLogin = token;
      // console.log('Token received in OtpVerifyComponent:', this.tokenFromLogin);
    });
}

ngOnDestroy(): void {
  this.clearTimer();
}

startTimer(): void {
  this.ngZone.runOutsideAngular(() => {
    this.intervalId = setInterval(() => {
      this.ngZone.run(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          this.clearTimer();
        }
      });
    }, 1000);
  });
}

clearTimer(): void {
  clearInterval(this.intervalId);
  // Optionally: Handle timer completion logic (e.g., show resend button)
}

  // submitOtp(): void {
  //   console.log('Response from server:', this.requestOTP);

  //   const payload={nOtp:Number(this.requestOTP.nOtp)}
  //   this.service.verifyOTP(payload,this.tokenFromLogin).subscribe(
  //     (response:any) => {
  //       this.accessToken = response.headers.get('Authorization');
  //       localStorage.setItem('token', this.accessToken);
  //       console.log(this.accessToken);
  //            console.log(response);
  //            this.data = response;

  //            Swal.fire({
  //             title: 'You are Logged In Successfully',
  //             showClass: {
  //               popup: 'animate__animated animate__fadeInDown'
  //             },
  //             hideClass: {
  //               popup: 'animate__animated animate__fadeOutUp'
  //             }
  //             });

  //            this.router.navigateByUrl('/dashboard');
  //    },
  //    error=>{
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Failed...',
  //       text: 'Incorrect OTP!',
  //     })
  //    }
  //    )
  // }

  
  resendOtp(){
this.router.navigateByUrl('/login');
    this.timer = 30;
    this.startTimer();
  }
}

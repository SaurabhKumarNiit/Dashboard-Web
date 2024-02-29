import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service';
import Swal from 'sweetalert2';
import { ApiService } from 'app/Services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  accessToken: any;

  constructor(
    private service: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private sharedService:SharedService
  ) {}

  loginForm!: FormGroup;
  
  sendTokenToOtpVerify(): void {
    // ... your code to generate and request OTP
    const generatedToken = this.accessToken;
    // console.log(generatedToken);
  
    // Send the token to the shared service
    this.sharedService.updateToken(generatedToken);
  }

    ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      sEmail: ['', Validators.required]
    });
  }

  user: any;
  loggedIn: any;

  timer: number = 33;
  intervalId: any;

  waitOTP: boolean = false;
  sendOTP: boolean = true;

  loginUser: any = { sEmail: '' };
  requestOTP: any = {};

  data: any;
  decodeData: any;
  userEmail: any;

  onSubmit() {
    console.log(this.loginForm.value);
    // this.service.login(this.loginForm.value).subscribe(
    //   (res: any) => {
    //     //  console.log(res);
    //     this.data = res;
    //     this.accessToken = res.headers.get('Verification');
    //     // console.log(this.accessToken);
    //     localStorage.setItem('email', this.loginUser.sEmail);

    //     Swal.fire({
    //       title: 'OTP Sent Successfully',
    //       showClass: {
    //         popup: 'animate__animated animate__fadeInDown',
    //       },
    //       hideClass: {
    //         popup: 'animate__animated animate__fadeOutUp',
    //       },
    //     });
    //     this.sendTokenToOtpVerify();
    //     this.router.navigateByUrl('/register');
    //   },
    //   (error) => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Failed...',
    //       text: 'You Not Have Access!',
    //     });
    //   }
    // );

    

    // console.log('Response from server:', this.loginUser);
    // console.log('Response from server:', this.requestOTP);
  }
}

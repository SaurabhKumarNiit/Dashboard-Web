import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service';
import Swal from 'sweetalert2';
import { ApiService } from '../Services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  accessToken: any;
  currentLoginStatus:any='Student Login';
  changeStatus:boolean=false;

  constructor(
    private service: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private sharedService:SharedService
  ) {}

  // loginForm!: FormGroup;


  
  // sendTokenToOtpVerify(): void {
  //   const generatedToken = this.accessToken;
  
  //   this.sharedService.updateToken(generatedToken);
  // }

    ngOnInit(): void {
  }

    loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required]]
    });
  

    adminloginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required]
    });
  

  get f() {
    return this.loginForm.controls;
  }

  get fa() {
    return this.adminloginForm.controls;
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
  changeCurrectStatus(){
    if(this.currentLoginStatus=='Student Login'){

      this.currentLoginStatus='Admin Login';
      this.changeStatus=true

      this.loginForm.reset;
    }else{

      this.currentLoginStatus='Student Login';
      this.changeStatus=false
      this.loginForm.reset;

    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
 if(this.loginForm.valid){
  this.service.adminlogin(this.loginForm.value).subscribe(
    (res: any) => {
       console.log(res.body.token);
       sessionStorage.setItem('current-token',res.body.token);
      this.data = res;
      // this.accessToken = res.headers.get('Verification');
      // console.log(this.accessToken);
      sessionStorage.setItem('adminEmail', this.loginForm.value.email);

      Swal.fire({
        title: 'Admin Login Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      this.router.navigateByUrl('/dashboard');
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Failed...',
        text: 'Incorrect Email & Password!',
      });
    }
  );
 }else{
  Swal.fire({
    icon: 'error',
    title: 'Failed...',
    text: 'Please Fill Your Correct Email & Password!',
  });
 }

    

    // console.log('Response from server:', this.loginUser);
    // console.log('Response from server:', this.requestOTP);
  }

  onStudentSubmit() {
    console.log(this.loginForm.value);
  if(this.loginForm.valid){
    this.service.studentlogin(this.loginForm.value).subscribe(
      (res: any) => {
        //  console.log(res.body.token);
         sessionStorage.setItem('secureToken',res.body.token);
        this.data = res;
        // this.accessToken = res.headers.get('Verification');
        // console.log(this.accessToken);
        sessionStorage.setItem('email', this.loginForm.value.email);

        Swal.fire({
          title: 'Student Login Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        this.router.navigateByUrl('/user-profile');
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed...',
          text: 'Please Check Your Email & Password!',
        });
      }
    );
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Failed...',
      text: 'Please Fill Your Correct Email & Password!',
    });
  }

    

    // console.log('Response from server:', this.loginUser);
    // console.log('Response from server:', this.requestOTP);
  }
}

"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[888],{2888:(Be,E,d)=>{d.r(E),d.d(E,{AdminLayoutModule:()=>Ge});var f=d(1282),g=d(1368),r=d(6504),H=d(4336);class _ extends Error{}function w(n,s){if("string"!=typeof n)throw new _("Invalid token specified: must be a string");s||(s={});const t=!0===s.header?0:1,i=n.split(".")[t];if("string"!=typeof i)throw new _(`Invalid token specified: missing part #${t+1}`);let o;try{o=function j(n){let s=n.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function U(n){return decodeURIComponent(atob(n).replace(/(.)/g,(s,t)=>{let i=t.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(s)}catch{return atob(s)}}(i)}catch(a){throw new _(`Invalid token specified: invalid base64 for part #${t+1} (${a.message})`)}try{return JSON.parse(o)}catch(a){throw new _(`Invalid token specified: invalid json for part #${t+1} (${a.message})`)}}_.prototype.name="InvalidTokenError";var e=d(4496),k=d(9856),z=d(4532);function X(n,s){if(1&n&&(e.I0R(0,"tbody",18)(1,"tr")(2,"td"),e.OEk(3),e.C$Y(),e.I0R(4,"td"),e.OEk(5),e.C$Y(),e.I0R(6,"td"),e.OEk(7),e.wVc(8,"date"),e.C$Y(),e.I0R(9,"td"),e.OEk(10),e.wVc(11,"date"),e.C$Y(),e.I0R(12,"td"),e.OEk(13),e.C$Y(),e.I0R(14,"td")(15,"a",19),e.wR5(16,"img",20),e.C$Y()()()()),2&n){const t=s.$implicit,i=s.index;e.yG2(3),e.oRS("",i+1,"."),e.yG2(2),e.cNF(t.sName),e.yG2(2),e.cNF(e.kDX(8,6,t.dStartDate)),e.yG2(3),e.cNF(e.kDX(11,8,t.dEndDate)),e.yG2(3),e.cNF(t.sStartTime),e.yG2(2),e._6D("routerLink",t._id)}}function q(n,s){if(1&n&&(e.I0R(0,"tbody",18)(1,"tr")(2,"td"),e.OEk(3),e.C$Y(),e.I0R(4,"td"),e.OEk(5),e.C$Y(),e.I0R(6,"td"),e.OEk(7),e.wVc(8,"date"),e.C$Y(),e.I0R(9,"td"),e.OEk(10),e.wVc(11,"date"),e.C$Y(),e.I0R(12,"td"),e.OEk(13),e.C$Y(),e.I0R(14,"td")(15,"a",19),e.wR5(16,"img",20),e.C$Y()()()()),2&n){const t=s.$implicit,i=s.index;e.yG2(3),e.oRS("",i+1,"."),e.yG2(2),e.cNF(t.sName),e.yG2(2),e.cNF(e.kDX(8,6,t.dStartDate)),e.yG2(3),e.cNF(e.kDX(11,8,t.dEndDate)),e.yG2(3),e.cNF(t.sStartTime),e.yG2(2),e._6D("routerLink",t._id)}}let W=(()=>{class n{constructor(t,i){this.apiService=t,this.sharedService=i,this.tokenFromLogin="",this.myAngularxQrCode="null",this.pastEventsArray=[],this.upcomingEventsArray=[],this.dataAvailable=!1,this.Eventlength=0}generateQr(){H.toCanvas(document.getElementById("canvas"),"sample text",function(t){t&&console.error(t),console.log("success!")})}ngOnInit(){this.authToken=localStorage.getItem("token"),this.decodeData=w(this.authToken),this.setGreetingMessage()}setGreetingMessage(){const t=(new Date).getHours();this.greetingMessage=t>=5&&t<12?"Good Morning":t>=12&&t<18?"Good Afternoon":"Good Evening",console.log("Greeting Message:",this.greetingMessage)}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(k.W),e.GI1(z.U))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-dashboard"]],decls:56,vars:3,consts:[[1,"main-content"],[1,"container-fluid"],[1,"card",2,"height","70px"],[1,"card-header","card-header-tabs","card-header-primary"],[1,"nav-tabs-navigation"],[1,"nav-tabs-wrapper"],[1,"nav-tabs-title"],[2,"font-size","larger"],["data-tabs","tabs",1,"nav","nav-tabs",2,"justify-content","end"],[1,"row"],[1,"col-lg-6","col-md-12"],[1,"card"],[1,"card-header","card-header-primary"],[1,"card-title"],[1,"card-body","table-responsive"],[1,"table","table-hover"],[1,"text-warning"],["id","data",4,"ngFor","ngForOf"],["id","data"],[3,"routerLink"],["src","/assets/app-img/eye.png","alt",""]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"span",6),e.OEk(7,"Hi' Admin "),e.I0R(8,"strong",7),e.OEk(9),e.C$Y()(),e.wR5(10,"ul",8),e.C$Y()()()(),e.I0R(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"h4",13),e.OEk(16,"Past Events"),e.C$Y()(),e.I0R(17,"div",14)(18,"table",15)(19,"thead",16)(20,"th"),e.OEk(21,"ID"),e.C$Y(),e.I0R(22,"th"),e.OEk(23,"Event Name"),e.C$Y(),e.I0R(24,"th"),e.OEk(25,"Start Date"),e.C$Y(),e.I0R(26,"th"),e.OEk(27,"End Date"),e.C$Y(),e.I0R(28,"th"),e.OEk(29,"Start Time"),e.C$Y(),e.I0R(30,"th"),e.OEk(31,"View"),e.C$Y()(),e.yuY(32,X,17,10,"tbody",17),e.C$Y()()()(),e.I0R(33,"div",10)(34,"div",11)(35,"div",12)(36,"h4",13),e.OEk(37,"Upcoming Events"),e.C$Y()(),e.I0R(38,"div",14)(39,"table",15)(40,"thead",16)(41,"th"),e.OEk(42,"ID"),e.C$Y(),e.I0R(43,"th"),e.OEk(44,"Event Name"),e.C$Y(),e.I0R(45,"th"),e.OEk(46,"Start Date"),e.C$Y(),e.I0R(47,"th"),e.OEk(48,"End Date"),e.C$Y(),e.I0R(49,"th"),e.OEk(50,"Start Time"),e.C$Y(),e.I0R(51,"th"),e.OEk(52,"View"),e.C$Y()(),e.yuY(53,q,17,10,"tbody",17),e.C$Y()()()()(),e.I0R(54,"div",9),e.wR5(55,"div",10),e.C$Y()()()),2&i&&(e.yG2(9),e.oRS(" ",o.greetingMessage,""),e.yG2(23),e.E7m("ngForOf",o.pastEventsArray),e.yG2(21),e.E7m("ngForOf",o.upcomingEventsArray))},dependencies:[g.ay,f.ER,g.y],styles:[".demo-inline-calendar-card[_ngcontent-%COMP%]{\n    width: 280px;\n   \n}"]})}return n})();var R=d(2584),K=d(2732),Q=d(8572),M=d(8376),C=d(8760),x=d(3040),S=d(5208),b=d(6956);function Z(n,s){1&n&&e.OEk(0,"Done")}function J(n,s){if(1&n){const t=e.KQA();e.I0R(0,"div",42)(1,"p",43),e.OEk(2,"Select One Payment Method"),e.C$Y(),e.I0R(3,"div",44)(4,"a",45),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.openLink())}),e.wR5(5,"img",46),e.C$Y(),e.I0R(6,"a",45),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.paymentConfirm())}),e.wR5(7,"img",47),e.C$Y()()()}}const ce=[{path:"dashboard",component:W},{path:"user-profile",component:(()=>{class n{constructor(t,i,o,a,h,l,m,u){this.fb=t,this.service=i,this.router=o,this.paypalService=a,this.currencyService=h,this._formBuilder=l,this._snackBar=m,this.route=u,this.checkoutDisable=!0,this.usdAmount=0,this.isLinear=!1,this.durationInSeconds=5,this.isEditable=!1,this.paymentState=!1,this.billAmount="00",this.billAmountForPaypal=12e3,this.readyToVerify=!1,this.readyToPay=!1,this.hideToPay=!0,this.isLoading=!1,this.firstFormGroup=this._formBuilder.group({firstCtrl:["",r.AQ.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",r.AQ.required]}),this.dataPayment={},this.registrationForm=this.fb.group({studentName:["",[r.AQ.required,r.AQ.minLength(5)]],totalAmount:[""],email:["",[r.AQ.required,r.AQ.email]],yearOfStudy:[""],address:[""],demoTime:[""],phoneNo:["",[r.AQ.required,r.AQ.pattern(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)]]}),this.otpForm=this.fb.group({otp:["",[r.AQ.required,r.AQ.minLength(4)]]})}navigateToRegister(){this.router.navigateByUrl("/register")}paymentForPaypal(){this.paypalService.getAccessToken().subscribe(t=>{this.generatedAccessToken=t.access_token,console.log(this.generatedAccessToken)})}ngOnInit(){const i=new URL("https://example.com/return?token=6GT69374B0243392R&PayerID=9L5ZFFG8LPWSS"),o=i.searchParams.get("token"),a=i.searchParams.get("PayerID");console.log("Token:",o),console.log("PayerID:",a),this.convert(),this.paymentForPaypal(),this.initForm()}updateBillAmount(t){this.billAmount=t,this.checkoutDisable=!1}initForm(){this.orderForm=this.fb.group({intent:["CAPTURE",r.AQ.required],purchase_units:this.fb.array([this.fb.group({items:this.fb.array([this.createItemFormGroup()]),amount:this.fb.group({currency_code:["USD",r.AQ.required],value:["144.72",r.AQ.required],breakdown:this.fb.group({item_total:this.fb.group({currency_code:["USD",r.AQ.required],value:["144.72",r.AQ.required]})})})})]),application_context:this.fb.group({return_url:["https://saurabhkumarniit.github.io/Dashboard-Web/#/thank-you",r.AQ.required],cancel_url:["https://example.com/cancel",r.AQ.required]})})}createItemFormGroup(){return this.fb.group({name:["Books",r.AQ.required],description:["12 th",r.AQ.required],quantity:["1",r.AQ.required],unit_amount:this.fb.group({currency_code:["USD",r.AQ.required],value:["144.72",r.AQ.required]})})}onSubmit(){this.paymentState=!0,this.convert(),this.paypalService.createOrder(this.orderForm.value,this.generatedAccessToken).subscribe(t=>{this.urlTokenId=t.body.id,console.log(this.urlTokenId);const i=t.body.links.filter(a=>"approve"===a.rel);console.log(i),this.redurectedLink=i;const o=i.map(a=>a.href).join(", ");console.log(o),this.readyLink=o})}submitPayment(){this.paypalService.approveOrder(this.urlTokenId,this.dataPayment,this.generatedAccessToken).subscribe(t=>{console.log(t)})}openLink(){window.open(this.readyLink,"_blank")}convert(){this.usdAmount=this.currencyService.convertINRtoUSD(this.billAmountForPaypal),console.log(this.usdAmount)}get studentName(){return this.registrationForm.get("studentName")}get yearOfStudy(){return this.registrationForm.get("yearOfStudy")}get address(){return this.registrationForm.get("address")}get demoTime(){return this.registrationForm.get("demoTime")}get email(){return this.registrationForm.get("email")}get phoneNo(){return this.registrationForm.get("phoneNo")}get totalAmount(){return this.registrationForm.get("totalAmount")}get otp(){return this.otpForm.get("otp")}checkData(){this.readyToVerify=0==this.readyToVerify}verifydata(){this.isLoading=!0,this.service.registerCustomer({studentName:this.studentName?.value,email:this.email?.value,phoneNo:this.phoneNo?.value,totalAmount:this.totalAmount?.value,yearOfStudy:this.yearOfStudy?.value,demoTime:this.demoTime?.value,address:this.address?.value}).subscribe(t=>{console.log(t),localStorage.setItem("email",t.email),this.billAmount=t.totalAmount,this.userEmail=t.email,this.customerName=t.studentName,this.MobileNo=t.phoneNo,this.readyToVerify=!0,this._snackBar.open("OTP Send On Registered Email","Close",{duration:4e3,panelClass:["success-snackbar"],horizontalPosition:"center",verticalPosition:"top"}),this.registrationForm.reset(),this.isLoading=!1},t=>{this._snackBar.open("Something went wrong!","Close",{duration:5e3,panelClass:["error-snackbar"],horizontalPosition:"center",verticalPosition:"top"}),this.isLoading=!1})}verifyOtp(){this.service.verifyOtp({otp:this.otp?.value}).subscribe(t=>{console.log(t),this._snackBar.open("OTP Verified","Close",{duration:4e3,panelClass:["success-snackbar"],horizontalPosition:"center",verticalPosition:"top"}),this.readyToPay=!0,this.otpForm.reset(),this.hideToPay=!1},t=>{this._snackBar.open("Please Enter Correct OTP!","Close",{duration:4e3,panelClass:["error-snackbar"],horizontalPosition:"center",verticalPosition:"top"})})}paymentConfirm(){this.paymentStart()}paymentStart(){console.log("payment started --");let t=this.billAmount;console.log(t),R.ajax({url:"https://talented-kick-production.up.railway.app/payment/create_order/"+this.userEmail,data:JSON.stringify({amount:t,info:"order_request"}),contentType:"application/json",type:"POST",dataType:"json",success:function(o){if(console.log(o),"created"==o.status){let h={key:"rzp_test_LP91fzOg59Pohi",amount:o.amount,currency:"INR",name:"Admin Payment Gateway",description:"No Worries its Secure Payment",image:"https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-payment-icon-png-image_313445.jpg",order_id:o.id,handler:function(l){console.log(l.razorpay_payment_id),console.log(l.razorpay_order_id),console.log(l.razorpay_signature),function i(o,a,h){R.ajax({url:"https://talented-kick-production.up.railway.app/payment/update_order",data:JSON.stringify({payment_id:o,order_id:a,statu:h}),contentType:"application/json",type:"POST",dataType:"json",success:function(l){console.log(l),this._snackBar.open("Payment Success","Close",{duration:4e3,panelClass:["success-snackbar"],horizontalPosition:"center",verticalPosition:"top"}),setTimeout(()=>{this.router.navigateByUrl("")},4e3)},error:function(l){this._snackBar.open("Something went wrong!","Close",{duration:5e3,panelClass:["error-snackbar"],horizontalPosition:"center",verticalPosition:"top"})}})}(l.razorpay_payment_id,l.razorpay_order_id,"paid")},prefill:{name:this.customerName,email:this.userEmail,contact:this.MobileNo},notes:{address:"India MP"},theme:{color:"#3399cc"}};var a=new Razorpay(h);a.on("payment.failed",function(l){alert(l.error.code),alert(l.error.description),alert(l.error.source),alert(l.error.step),alert(l.error.reason),alert(l.error.metadata.order_id),alert(l.error.payment_id)}),a.open()}},error:function(o){console.log(o)}})}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(r.im),e.GI1(k.W),e.GI1(f.E5),e.GI1(K.G),e.GI1(Q._),e.GI1(r.im),e.GI1(M.yS),e.GI1(f.gV))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-user-profile"]],decls:88,vars:10,consts:[[1,"main-content"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-category"],[3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"example-full-width"],["matInput","","placeholder","Student Name","type","text","formControlName","studentName","required",""],["matInput","","placeholder","Email address","type","email","formControlName","email","required",""],[1,"col-md-4"],["matInput","","placeholder","Year Of Study","type","text","formControlName","yearOfStudy"],["matInput","","placeholder","Demo Time","type","time","formControlName","demoTime"],["matInput","","placeholder","Phone No","type","number","formControlName","phoneNo","required",""],["matInput","","placeholder","Address","type","text","formControlName","address"],["type","submit","mat-button","","matStepperNext",""],[1,"col-md-8"],["matInput","","placeholder","Enter OTP","type","text","formControlName","otp","required",""],["mat-button","","matStepperNext",""],[1,"form-help"],["matStepLabel",""],[1,"payment"],[1,"control-form"],[1,"form-fields"],["for","name"],["for","field",2,"font-size","16px","display","block","margin-bottom","10px"],[1,"form-controls"],["type","radio","id","12_class","name","pre_book","value","12000",3,"change"],["for","12"],["type","radio","id","25_class","name","pre_book","value","25000",3,"change"],["for","25"],["type","radio","id","30_class","name","pre_book","value","30000",3,"change"],["for","30"],[1,"amount"],[1,"amount-input"],["matInput","","placeholder","Enter Your Amount","type","text",2,"font-weight","bold","font-size","large",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"disabled","click"],["style","text-align: center;",4,"ngIf"],[2,"text-align","center"],[2,"background-color","#4CAF50","font-weight","bold","padding","10px","color","white"],[1,"paymentState"],[3,"click"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png","alt","PayPal"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1896px-Razorpay_logo.svg.png","alt","Razorpay"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"div")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"p",5),e.OEk(7,"Complete your profile"),e.C$Y()(),e.I0R(8,"mat-stepper",6,7)(10,"mat-step",8)(11,"form",9),e.qCj("ngSubmit",function(){return o.verifydata()}),e.I0R(12,"div",1)(13,"div",10)(14,"mat-form-field",11),e.wR5(15,"input",12),e.C$Y()(),e.I0R(16,"div",10)(17,"mat-form-field",11),e.wR5(18,"input",13),e.C$Y()()(),e.I0R(19,"div",1)(20,"div",14)(21,"mat-form-field",11),e.wR5(22,"input",15),e.C$Y()(),e.I0R(23,"div",14)(24,"mat-form-field",11),e.wR5(25,"input",16),e.C$Y()(),e.I0R(26,"div",14)(27,"mat-form-field",11),e.wR5(28,"input",17),e.C$Y()()(),e.I0R(29,"div",1)(30,"div",2)(31,"mat-form-field",11),e.wR5(32,"input",18),e.C$Y()()(),e.I0R(33,"button",19),e.OEk(34,"Next"),e.C$Y()()(),e.I0R(35,"mat-step",8)(36,"div")(37,"h2"),e.OEk(38,"Submit Otp!"),e.C$Y(),e.I0R(39,"form",9),e.qCj("ngSubmit",function(){return o.verifyOtp()}),e.I0R(40,"div",20)(41,"mat-form-field",11),e.wR5(42,"input",21),e.C$Y()(),e.I0R(43,"button",22),e.OEk(44,"Next"),e.C$Y()(),e.wR5(45,"div",23),e.C$Y()(),e.I0R(46,"mat-step"),e.yuY(47,Z,1,0,"ng-template",24),e.I0R(48,"div",25)(49,"h2"),e.OEk(50,"Payment Details"),e.C$Y(),e.I0R(51,"form")(52,"div",26)(53,"div",27)(54,"label",28),e.OEk(55,"Student Name"),e.C$Y(),e.I0R(56,"p"),e.OEk(57),e.C$Y()(),e.I0R(58,"div",27)(59,"label",28),e.OEk(60,"Email"),e.C$Y(),e.I0R(61,"p"),e.OEk(62),e.C$Y()()(),e.I0R(63,"h3",29),e.OEk(64,"Select Option future update"),e.C$Y(),e.I0R(65,"div",30)(66,"span")(67,"input",31),e.qCj("change",function(){return o.updateBillAmount(12e3)}),e.C$Y(),e.I0R(68,"label",32),e.OEk(69,"Pre-book for 12 classes"),e.C$Y(),e.wR5(70,"br"),e.C$Y(),e.I0R(71,"span")(72,"input",33),e.qCj("change",function(){return o.updateBillAmount(25e3)}),e.C$Y(),e.I0R(73,"label",34),e.OEk(74,"Pre-book for 25 classes"),e.C$Y(),e.wR5(75,"br"),e.C$Y(),e.I0R(76,"span")(77,"input",35),e.qCj("change",function(){return o.updateBillAmount(3e4)}),e.C$Y(),e.I0R(78,"label",36),e.OEk(79,"Pre-book for 30 classes"),e.C$Y()()(),e.I0R(80,"div",37)(81,"small"),e.OEk(82,"Your Total Amount, You can all update your amount according your requirment."),e.C$Y(),e.I0R(83,"div",38)(84,"input",39),e.iHE("ngModelChange",function(h){return e.kNx(o.billAmount,h)||(o.billAmount=h),h}),e.C$Y()()(),e.I0R(85,"button",40),e.qCj("click",function(){return o.onSubmit()}),e.OEk(86,"CheckOut Now"),e.C$Y(),e.yuY(87,J,8,0,"div",41),e.C$Y()()()()()()()()()),2&i&&(e.yG2(8),e.E7m("linear",o.isLinear),e.yG2(2),e.E7m("stepControl",o.registrationForm),e.yG2(),e.E7m("formGroup",o.registrationForm),e.yG2(24),e.E7m("stepControl",o.secondFormGroup),e.yG2(4),e.E7m("formGroup",o.otpForm),e.yG2(18),e.cNF(o.customerName),e.yG2(5),e.cNF(o.userEmail),e.yG2(22),e.OKB("ngModel",o.billAmount),e.yG2(),e._6D("disabled",o.checkoutDisable),e.yG2(2),e.E7m("ngIf",o.paymentState))},dependencies:[g.u_,r.sz,r.ot,r.O4,r.ue,r.u,r.eJ,r._G,r.SC,r.uW,r.Wo,C.Gw,x.Up,S.yi,b.Un,b.E9,b.uI,b.yi],styles:['img[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    border-radius: 10px;\n    padding: 8px;\n    border: 1px solid grey;\n    width: 200px;\n    line-height: 5px;\n    height: 50px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n    font-family: \'Roboto\', sans-serif;\n    background-color: #f0f8ea; \n\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  .payment[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 40px auto;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n.paymentState[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n  h2[_ngcontent-%COMP%] {\n    color: #6A56A6; \n\n  }\n\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .control-form[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n\n  .form-fields[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-right: 10px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    font-size: 10px;\n    margin-bottom: 5px;\n    color: #3f3e3e;\n    \n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .form-controls[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    padding: 20px;\n    border: 1px solid rgb(24, 24, 24);\n    margin-bottom: 20px;\n  }\n  \n\n\n\n\n  input[type="radio"][_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-right: 35px;\n  }\n\n  .amount[_ngcontent-%COMP%] {\n text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .amount-input[_ngcontent-%COMP%] {\n    border: 1px solid#222222;\n    padding: 10px;\n    border-radius: 10px;\n    flex: 1;\n    margin-left: 10px;\n  }\n\n  \n\n\n\n\n\n\n\n\n\n  button[_ngcontent-%COMP%] {\n    background-color: #4CAF50; \n\n    color: #fff;\n    padding: 10px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n\n  button[_ngcontent-%COMP%]:hover {\n    background-color: #45a049; \n\n  }\n\n\n  \n\n  @media screen and (max-width: 600px) {\n    .payment[_ngcontent-%COMP%] {\n      width: 100%;\n      \n    }\n  }\n\n\n\n  .error-snackbar {\n  background-color: rgb(152, 5, 5); \n\n  color: #ffffff; \n\n}\n\n  .success-snackbar {\n  background-color: rgb(4, 117, 4); \n\n  color: #ffffff; \n\n}\n\n .example-full-width[_ngcontent-%COMP%]   input[type="time"][_ngcontent-%COMP%] {\n  font-size: 20px; \n\n\n\n}']})}return n})()},{path:"table-list",component:(()=>{class n{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-table-list"]],decls:40,vars:0,consts:[[1,"main"],["type","text","value","DD"],["type","text","value","--MM"],["type","text","value","01 jun"],["type","text","value","--Female"],["type","text","value","Card Number"],["type","text","value","VISA Credit Card"],["type","text","value","YYYY"],["type","text","value","A"],["type","text","value","Paypal"],["type","submit"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"form")(2,"div")(3,"label"),e.OEk(4,"Account"),e.C$Y(),e.wR5(5,"input",1),e.C$Y(),e.I0R(6,"div")(7,"label"),e.OEk(8,"Full Name"),e.C$Y(),e.wR5(9,"input",2),e.C$Y(),e.I0R(10,"div")(11,"label"),e.OEk(12,"Date of Birth"),e.C$Y(),e.wR5(13,"input",3),e.C$Y(),e.I0R(14,"div")(15,"label"),e.OEk(16,"Email Adress"),e.C$Y(),e.wR5(17,"input",4),e.C$Y(),e.I0R(18,"div")(19,"label"),e.OEk(20,"Payment Details"),e.C$Y(),e.wR5(21,"input",5),e.C$Y(),e.I0R(22,"div")(23,"label"),e.OEk(24,"Payment Form"),e.C$Y(),e.wR5(25,"input",6),e.C$Y(),e.I0R(26,"div")(27,"label"),e.OEk(28,"Card CVC"),e.C$Y(),e.wR5(29,"input",7),e.C$Y(),e.I0R(30,"div")(31,"label"),e.OEk(32,"Nick Name"),e.C$Y(),e.wR5(33,"input",8),e.C$Y(),e.I0R(34,"div")(35,"label"),e.OEk(36,"Gender"),e.C$Y(),e.wR5(37,"input",9),e.C$Y(),e.I0R(38,"button",10),e.OEk(39,"PAY NOW"),e.C$Y()()())},dependencies:[r.sz,r.u,r.SC],styles:[".main[_ngcontent-%COMP%] {\n    font-family: 'Roboto', sans-serif;\n    color: #333;\n    background-color: #f4f4f4;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    background-color: #4CAF50;\n    color: white;\n  }\n  \n  input[_ngcontent-%COMP%] {\n    border-color: #ccc;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    color: #333;\n  }\nform[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 10px;\n    align-items: center;\n    justify-content: center;\n    margin-top: 50px;\n  }\n  \n  input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  input[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    grid-column: 1 / 3;\n    padding: 10px 20px;\n    font-size: 20px;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    background-color: #45a049;\n  }\n  \n  label[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin-top: 30px;\n  }"]})}return n})()},{path:"typography",component:(()=>{class n{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-typography"]],decls:0,vars:0,template:function(i,o){}})}return n})()},{path:"icons",component:(()=>{class n{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-icons"]],decls:22,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"card","card-plain"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],["target","_blank","href","https://fonts.google.com/icons"],[1,"row"],[1,"col-md-12"],[1,"card-body"],[1,"iframe-container","d-none","d-lg-block"],["src","https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes"],[1,"col-md-12","d-none","d-sm-block","d-md-block","d-lg-none","d-block","d-sm-none","text-center","ml-auto","mr-auto"],["href","https://fonts.google.com/icons","target","_blank"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e.OEk(5,"Material Design Icons"),e.C$Y(),e.I0R(6,"p",5),e.OEk(7,"Handcrafted by our friends from "),e.I0R(8,"a",6),e.OEk(9,"Google"),e.C$Y()()(),e.I0R(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"iframe",11)(15,"p"),e.OEk(16,"Your browser does not support iframes."),e.C$Y()()(),e.I0R(17,"div",12)(18,"h5"),e.OEk(19,"The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the "),e.I0R(20,"a",13),e.OEk(21,"Material Icons"),e.C$Y()()()()()()()()())}})}return n})()},{path:"maps",component:(()=>{class n{constructor(){}ngOnInit(){var t=new google.maps.LatLng(40.748817,-73.985428),i={zoom:13,center:t,scrollwheel:!1,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},o=new google.maps.Map(document.getElementById("map"),i);new google.maps.Marker({position:t,title:"Hello World!"}).setMap(o)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-maps"]],decls:1,vars:0,consts:[["id","map"]],template:function(i,o){1&i&&e.wR5(0,"div",0)}})}return n})()},{path:"notifications",component:(()=>{class n{constructor(){}showNotification(t,i){const a=Math.floor(4*Math.random()+1);$.notify({icon:"notifications",message:"Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."},{type:["","info","success","warning","danger"][a],timer:4e3,placement:{from:t,align:i},template:'<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button><i class="material-icons" data-notify="icon">notifications</i> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'})}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-notifications"]],decls:118,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],["target","_blank","href","https://github.com/mouse0270"],["href","http://bootstrap-notify.remabledesigns.com/","target","_blank"],[1,"card-body"],[1,"row"],[1,"col-md-6"],[1,"alert","alert-info"],["mat-button","","type","button","data-dismiss","alert","aria-label","Close",1,"close"],[1,"material-icons"],["data-notify","container",1,"alert","alert-info","alert-with-icon"],["data-notify","icon",1,"material-icons"],["data-notify","message"],[1,"alert","alert-success"],[1,"alert","alert-warning"],[1,"alert","alert-danger"],[1,"alert","alert-primary"],[1,"col-md-12"],[1,"places-buttons"],[1,"col-md-6","ml-auto","mr-auto","text-center"],[1,"category"],[1,"col-lg-8","col-md-10","ml-auto","mr-auto"],[1,"col-md-4"],["mat-raised-button","",1,"btn","btn-danger","btn-block",3,"click"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e.OEk(5,"Notifications"),e.C$Y(),e.I0R(6,"p",5),e.OEk(7,"Handcrafted by our friend "),e.I0R(8,"a",6),e.OEk(9,"Robert McIntosh"),e.C$Y(),e.OEk(10,". Please checkout the "),e.I0R(11,"a",7),e.OEk(12,"full documentation."),e.C$Y()()(),e.I0R(13,"div",8)(14,"div",9)(15,"div",10)(16,"h4",4),e.OEk(17,"Notifications Style"),e.C$Y(),e.I0R(18,"div",11)(19,"span"),e.OEk(20,"This is a plain notification"),e.C$Y()(),e.I0R(21,"div",11)(22,"button",12)(23,"i",13),e.OEk(24,"close"),e.C$Y()(),e.I0R(25,"span"),e.OEk(26,"This is a notification with close button."),e.C$Y()(),e.I0R(27,"div",14)(28,"i",15),e.OEk(29,"add_alert"),e.C$Y(),e.I0R(30,"button",12)(31,"i",13),e.OEk(32,"close"),e.C$Y()(),e.I0R(33,"span",16),e.OEk(34,"This is a notification with close button and icon."),e.C$Y()(),e.I0R(35,"div",14)(36,"i",15),e.OEk(37,"add_alert"),e.C$Y(),e.I0R(38,"button",12)(39,"i",13),e.OEk(40,"close"),e.C$Y()(),e.I0R(41,"span",16),e.OEk(42,"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."),e.C$Y()()(),e.I0R(43,"div",10)(44,"h4",4),e.OEk(45,"Notification states"),e.C$Y(),e.I0R(46,"div",11)(47,"button",12)(48,"i",13),e.OEk(49,"close"),e.C$Y()(),e.I0R(50,"span")(51,"b"),e.OEk(52," Info - "),e.C$Y(),e.OEk(53,' This is a regular notification made with ".alert-info"'),e.C$Y()(),e.I0R(54,"div",17)(55,"button",12)(56,"i",13),e.OEk(57,"close"),e.C$Y()(),e.I0R(58,"span")(59,"b"),e.OEk(60," Success - "),e.C$Y(),e.OEk(61,' This is a regular notification made with ".alert-success"'),e.C$Y()(),e.I0R(62,"div",18)(63,"button",12)(64,"i",13),e.OEk(65,"close"),e.C$Y()(),e.I0R(66,"span")(67,"b"),e.OEk(68," Warning - "),e.C$Y(),e.OEk(69,' This is a regular notification made with ".alert-warning"'),e.C$Y()(),e.I0R(70,"div",19)(71,"button",12)(72,"i",13),e.OEk(73,"close"),e.C$Y()(),e.I0R(74,"span")(75,"b"),e.OEk(76," Danger - "),e.C$Y(),e.OEk(77,' This is a regular notification made with ".alert-danger"'),e.C$Y()(),e.I0R(78,"div",20)(79,"button",12)(80,"i",13),e.OEk(81,"close"),e.C$Y()(),e.I0R(82,"span")(83,"b"),e.OEk(84," Primary - "),e.C$Y(),e.OEk(85,' This is a regular notification made with ".alert-primary"'),e.C$Y()()()()(),e.I0R(86,"div",21)(87,"div",22)(88,"div",9)(89,"div",23)(90,"h4",4),e.OEk(91," Notifications Places "),e.I0R(92,"p",24),e.OEk(93,"Click to view notifications"),e.C$Y()()()(),e.I0R(94,"div",9)(95,"div",25)(96,"div",9)(97,"div",26)(98,"button",27),e.qCj("click",function(){return o.showNotification("top","left")}),e.OEk(99,"Top Left"),e.C$Y()(),e.I0R(100,"div",26)(101,"button",27),e.qCj("click",function(){return o.showNotification("top","center")}),e.OEk(102,"Top Center"),e.C$Y()(),e.I0R(103,"div",26)(104,"button",27),e.qCj("click",function(){return o.showNotification("top","right")}),e.OEk(105,"Top Right"),e.C$Y()()()()(),e.I0R(106,"div",9)(107,"div",25)(108,"div",9)(109,"div",26)(110,"button",27),e.qCj("click",function(){return o.showNotification("bottom","left")}),e.OEk(111,"Bottom Left"),e.C$Y()(),e.I0R(112,"div",26)(113,"button",27),e.qCj("click",function(){return o.showNotification("bottom","center")}),e.OEk(114,"Bottom Center"),e.C$Y()(),e.I0R(115,"div",26)(116,"button",27),e.qCj("click",function(){return o.showNotification("bottom","right")}),e.OEk(117,"Bottom Right"),e.C$Y()()()()()()()()()())},dependencies:[C.Gw]})}return n})()},{path:"upgrade",component:(()=>{class n{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-upgrade"]],decls:84,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","ml-auto","mr-auto"],[1,"card"],[1,"card-header","card-header-danger"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"table-responsive","table-upgrade"],[1,"table"],[1,"text-center"],[1,"fa","fa-times","text-danger"],[1,"fa","fa-check","text-success"],["href","javascript:void(0)",1,"btn","btn-round","btn-fill","btn-default","disabled"],["target","_blank","href","https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live",1,"btn","btn-round","btn-fill","btn-info"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e.OEk(7,"Material Dashboard PRO Angular"),e.C$Y(),e.I0R(8,"p",7),e.OEk(9,"Are you looking for more components? Please check our Premium Version of Material Dashboard Angular."),e.C$Y()(),e.I0R(10,"div",8)(11,"div",9)(12,"table",10)(13,"thead")(14,"tr"),e.wR5(15,"th"),e.I0R(16,"th",11),e.OEk(17,"Free"),e.C$Y(),e.I0R(18,"th",11),e.OEk(19,"PRO"),e.C$Y()()(),e.I0R(20,"tbody")(21,"tr")(22,"td"),e.OEk(23,"Components"),e.C$Y(),e.I0R(24,"td",11),e.OEk(25,"60"),e.C$Y(),e.I0R(26,"td",11),e.OEk(27,"200"),e.C$Y()(),e.I0R(28,"tr")(29,"td"),e.OEk(30,"Plugins"),e.C$Y(),e.I0R(31,"td",11),e.OEk(32,"2"),e.C$Y(),e.I0R(33,"td",11),e.OEk(34,"15"),e.C$Y()(),e.I0R(35,"tr")(36,"td"),e.OEk(37,"Example Pages"),e.C$Y(),e.I0R(38,"td",11),e.OEk(39,"3"),e.C$Y(),e.I0R(40,"td",11),e.OEk(41,"27"),e.C$Y()(),e.I0R(42,"tr")(43,"td"),e.OEk(44,"Login, Register, Pricing, Lock Pages"),e.C$Y(),e.I0R(45,"td",11),e.wR5(46,"i",12),e.C$Y(),e.I0R(47,"td",11),e.wR5(48,"i",13),e.C$Y()(),e.I0R(49,"tr")(50,"td"),e.OEk(51,"DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc..."),e.C$Y(),e.I0R(52,"td",11),e.wR5(53,"i",12),e.C$Y(),e.I0R(54,"td",11),e.wR5(55,"i",13),e.C$Y()(),e.I0R(56,"tr")(57,"td"),e.OEk(58,"Mini Sidebar"),e.C$Y(),e.I0R(59,"td",11),e.wR5(60,"i",12),e.C$Y(),e.I0R(61,"td",11),e.wR5(62,"i",13),e.C$Y()(),e.I0R(63,"tr")(64,"td"),e.OEk(65,"Premium Support"),e.C$Y(),e.I0R(66,"td",11),e.wR5(67,"i",12),e.C$Y(),e.I0R(68,"td",11),e.wR5(69,"i",13),e.C$Y()(),e.I0R(70,"tr"),e.wR5(71,"td"),e.I0R(72,"td",11),e.OEk(73,"Free"),e.C$Y(),e.I0R(74,"td",11),e.OEk(75,"Just $59"),e.C$Y()(),e.I0R(76,"tr"),e.wR5(77,"td",11),e.I0R(78,"td",11)(79,"a",14),e.OEk(80,"Current Version"),e.C$Y()(),e.I0R(81,"td",11)(82,"a",15),e.OEk(83,"Upgrade to PRO"),e.C$Y()()()()()()()()()()()())}})}return n})()},{path:"dashboard/qr",component:d(5008).L},{path:"dashboard/:_id",component:(()=>{class n{constructor(t,i,o){this.apiService=t,this.activateRoute=i,this.router=o,this.eventFields=[],this.myArray=[],this.fadeInAnimation="fadeIn"}ngOnInit(){this.authToken=localStorage.getItem("token"),this.decodeData=w(this.authToken)}updateEvent(){}deleteEvent(){}onSubmit(){}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(k.W),e.GI1(f.gV),e.GI1(f.E5))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-selected-event"]],decls:0,vars:0,template:function(i,o){},styles:["\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n@media screen and (max-width: 600px) {\n  .label[_ngcontent-%COMP%] {\n    margin-right: 0; \n\n  }\n  .item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    position: static; \n\n    align-items: flex-start; \n\n    margin-top: 10px; \n\n  }\n}\n.container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  position: relative;\n  max-width: 100%;\n  width: 100%;\n  background: transparent;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n\n.container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333;\n  font-weight: 500;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(33.3333333333% - 15px);\n  flex-direction: column;\n  margin: 4px 0;\n}\n\n.form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.funcButton[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.input-field   input[_ngcontent-%COMP%], .select-box)[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  outline: none;\n  font-size: 1rem;\n  color: #0c0101;\n  margin-top: 8px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 0 15px;\n}\n\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n}\n\n\n\n\n\n\n.form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.gender   input[_ngcontent-%COMP%], .gender[_ngcontent-%COMP%]   label)[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.gender[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  border: none;\n  color: #707070;\n  font-size: 1rem;\n}\n\n\n\n@media screen and (max-width: 500px) {\n  .form[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:where(.gender-option, .gender)[_ngcontent-%COMP%] {\n    row-gap: 15px;\n  }\n}"]})}return n})()}];var p=d(4562),y=d(9548),P=d(9624),D=d(1348);d(6908),d(9684);const ue={provide:new e.UbH("mat-tooltip-scroll-strategy"),deps:[y.mc],useFactory:function me(n){return()=>n.scrollStrategies.reposition({scrollThrottle:20})}};let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({providers:[ue],imports:[P.Ux,g.MD,y.Y1,p.AN,p.AN,D.uU]}),n})();const ke={provide:new e.UbH("mat-select-scroll-strategy"),deps:[y.mc],useFactory:function ve(n){return()=>n.scrollStrategies.reposition()}};let Ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({providers:[ke],imports:[g.MD,y.Y1,p.Ax,p.AN,D.uU,x.wb,p.Ax,p.AN]}),n})();var xe=d(8504),Oe=d(704),Y=(d(7512),d(2008));let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({}),n})(),Fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({imports:[p.KE,p.AN,Y.IT,G,p.AN,G]}),n})();var $e=d(9768);let Ge=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.a4G({type:n});static#i=this.\u0275inj=e.s3X({imports:[g.MD,f.qQ.forChild(ce),r.y,r.sl,C.oJ,Fe,p.KE,x.wb,S.cN,Ce,ge,p.Ko,Oe.NR,b.MJ,xe.iU,M.uE,$e.a]})}return n})()}}]);
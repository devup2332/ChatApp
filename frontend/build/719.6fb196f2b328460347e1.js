(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[719],{7719:(n,e,t)=>{"use strict";t.r(e),t.d(e,{RegisterModule:()=>I});var r=t(1116),o=t(6950),i=t(6304),a=t(1462),g=t(529),c=t(5909),s=t(8619),l=t(9801);function m(n,e){1&n&&(s.TgZ(0,"h1"),s._uU(1,"Movil"),s.qZA())}function d(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"First name is required"),s.qZA())}function p(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Last name is required"),s.qZA())}function f(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Email is required"),s.qZA())}function u(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Email is invalid"),s.qZA())}function _(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1," Email already is in use "),s.qZA())}function h(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Phone is required"),s.qZA())}function C(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Enter just numbers"),s.qZA())}function P(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Please enter your password"),s.qZA())}function M(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1,"Password to short"),s.qZA())}function O(n,e){1&n&&(s.TgZ(0,"p",24),s._uU(1," Password is not equal "),s.qZA())}const v=function(n){return{error:n}},x=function(n,e,t){return{error:n,error1:e,error2:t}},q=function(n,e){return{error:n,error1:e}};function w(n,e){if(1&n){const n=s.EpF();s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"p",4),s._uU(3," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis "),s.qZA(),s._UZ(4,"img",5),s.qZA(),s.TgZ(5,"div",6),s.TgZ(6,"form",7),s.TgZ(7,"h1",8),s._uU(8,"Register"),s.qZA(),s.TgZ(9,"p",9),s._uU(10," Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus "),s.qZA(),s.TgZ(11,"div",10),s._UZ(12,"input",11),s.YNc(13,d,2,0,"p",12),s.qZA(),s.TgZ(14,"div",10),s._UZ(15,"input",13),s.YNc(16,p,2,0,"p",12),s.qZA(),s.TgZ(17,"div",10),s._UZ(18,"input",14),s.YNc(19,f,2,0,"p",12),s.YNc(20,u,2,0,"p",12),s.YNc(21,_,2,0,"p",12),s.qZA(),s.TgZ(22,"div",10),s._UZ(23,"input",15),s.YNc(24,h,2,0,"p",12),s.YNc(25,C,2,0,"p",12),s.qZA(),s.TgZ(26,"div",10),s._UZ(27,"input",16),s.YNc(28,P,2,0,"p",12),s.YNc(29,M,2,0,"p",12),s.qZA(),s.TgZ(30,"div",10),s._UZ(31,"input",17),s.YNc(32,O,2,0,"p",12),s.qZA(),s.TgZ(33,"button",18),s.NdJ("click",function(){s.CHM(n);const e=s.MAs(35),t=s.oxw();return t.register_user(t.registerForm.value,e)}),s.O4$(),s.TgZ(34,"svg",19,20),s._UZ(36,"path",21),s.qZA(),s._uU(37," Register "),s.qZA(),s.kcU(),s.TgZ(38,"p",22),s._uU(39," You already have an account ? "),s.TgZ(40,"a",23),s._uU(41,"Login"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&n){const n=s.oxw();s.xp6(6),s.Q6J("formGroup",n.registerForm),s.xp6(5),s.Q6J("ngClass",s.VKq(17,v,n.name1Req)),s.xp6(2),s.Q6J("ngIf",n.name1Req),s.xp6(1),s.Q6J("ngClass",s.VKq(19,v,n.name2Req)),s.xp6(2),s.Q6J("ngIf",n.name2Req),s.xp6(1),s.Q6J("ngClass",s.kEZ(21,x,n.emailReq,n.emailInvalid,n.alreadyEmail)),s.xp6(2),s.Q6J("ngIf",n.emailReq),s.xp6(1),s.Q6J("ngIf",n.emailInvalid),s.xp6(1),s.Q6J("ngIf",n.alreadyEmail),s.xp6(1),s.Q6J("ngClass",s.WLB(25,q,n.phoneReq,n.phoneInvalid)),s.xp6(2),s.Q6J("ngIf",n.phoneReq),s.xp6(1),s.Q6J("ngIf",n.phoneInvalid),s.xp6(1),s.Q6J("ngClass",s.WLB(28,q,n.passReq,n.minLengthPass)),s.xp6(2),s.Q6J("ngIf",n.passReq),s.xp6(1),s.Q6J("ngIf",n.minLengthPass),s.xp6(1),s.Q6J("ngClass",s.VKq(31,v,n.passwordIsNotEqual)),s.xp6(2),s.Q6J("ngIf",n.passwordIsNotEqual)}}const Z=[{path:"",component:(()=>{class n{constructor(n,e){this.authSrv=n,this.router=e,this.devices=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i],this.match=!1}ngOnInit(){this.theme=localStorage.getItem("theme"),this.theme||(this.theme="light-theme",localStorage.setItem("theme","light-theme"),document.body.classList.add(this.theme)),"dark-theme"===this.theme&&(this.theme="light-theme",localStorage.setItem("theme","light-theme"),document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),this.match=this.devices.some(n=>navigator.userAgent.match(n)),document.body.classList.add(this.theme),this.createForm()}createForm(){this.registerForm=new a.cw({first_name:new a.NI("",a.kI.required),last_name:new a.NI("",a.kI.required),email:new a.NI("",[a.kI.required,a.kI.pattern(g.N.emailPatt)],this.authSrv._validate_email()),phone:new a.NI("",[a.kI.required,a.kI.pattern(g.N.numberPatt)]),password:new a.NI("",[a.kI.required,a.kI.minLength(9)]),password_2:new a.NI("")},{validators:this.authSrv._check_passwords("password","password_2")})}register_user(n,e){var t=this;return(0,i.Z)(function*(){if(t.registerForm.invalid)return Object.values(t.registerForm.controls).forEach(n=>{n.markAsDirty()});e.classList.add("visible");try{const r=yield t.authSrv._register_user(n);localStorage.setItem("access",r.token.access),localStorage.setItem("refresh",r.token.refresh),e.classList.remove("visible"),t.router.navigate(["/"])}catch(r){t.timer&&clearTimeout(t.timer),t.snackbar.show("Server dosent respond"),t.timer=setTimeout(()=>{t.snackbar.close()},3e3),e.classList.remove("visible")}})()}get name1Req(){var n,e;return(null===(n=this.registerForm.get("first_name"))||void 0===n?void 0:n.hasError("required"))&&(null===(e=this.registerForm.get("first_name"))||void 0===e?void 0:e.dirty)}get name2Req(){var n,e;return(null===(n=this.registerForm.get("last_name"))||void 0===n?void 0:n.hasError("required"))&&(null===(e=this.registerForm.get("last_name"))||void 0===e?void 0:e.dirty)}get emailReq(){var n,e;return(null===(n=this.registerForm.get("email"))||void 0===n?void 0:n.hasError("required"))&&(null===(e=this.registerForm.get("email"))||void 0===e?void 0:e.dirty)}get emailInvalid(){var n,e;return(null===(n=this.registerForm.get("email"))||void 0===n?void 0:n.hasError("pattern"))&&(null===(e=this.registerForm.get("email"))||void 0===e?void 0:e.touched)}get alreadyEmail(){var n;return null===(n=this.registerForm.get("email"))||void 0===n?void 0:n.hasError("exist")}get phoneReq(){var n,e;return(null===(n=this.registerForm.get("phone"))||void 0===n?void 0:n.hasError("required"))&&(null===(e=this.registerForm.get("phone"))||void 0===e?void 0:e.dirty)}get phoneInvalid(){var n,e;return(null===(n=this.registerForm.get("phone"))||void 0===n?void 0:n.hasError("pattern"))&&(null===(e=this.registerForm.get("phone"))||void 0===e?void 0:e.touched)}get passReq(){var n,e;return(null===(n=this.registerForm.get("password"))||void 0===n?void 0:n.hasError("required"))&&(null===(e=this.registerForm.get("password"))||void 0===e?void 0:e.dirty)}get passwordIsNotEqual(){var n;return this.registerForm.hasError("notEqual")&&(null===(n=this.registerForm.get("password_2"))||void 0===n?void 0:n.touched)}get minLengthPass(){var n,e;return(null===(n=this.registerForm.get("password"))||void 0===n?void 0:n.hasError("minlength"))&&(null===(e=this.registerForm.get("password"))||void 0===e?void 0:e.touched)}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(l.C),s.Y36(o.F0))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-register"]],viewQuery:function(n,e){if(1&n&&s.Gf(c.h,5),2&n){let n;s.iGM(n=s.CRH())&&(e.snackbar=n.first)}},decls:3,vars:2,consts:[[4,"ngIf"],["class","register-page-container",4,"ngIf"],[1,"register-page-container"],[1,"right-container"],[1,"description"],["src","assets/vectors/register_vector.png","alt",""],[1,"left-container"],[1,"form",3,"formGroup"],[1,"title"],[1,"description-form"],[1,"control",3,"ngClass"],["type","text","placeholder","First Name","formControlName","first_name","autocomplete","off"],["class","error-message",4,"ngIf"],["type","text","placeholder","Last Name","formControlName","last_name","autocomplete","off"],["type","text","placeholder","Email","formControlName","email","autocomplete","off"],["type","text","placeholder","Phone Number","formControlName","phone","autocomplete","off"],["type","password","placeholder","Password","formControlName","password","autocomplete","off"],["type","password","placeholder","Confirm Password","formControlName","password_2","autocomplete","off"],[1,"btn-register",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 64 64",1,"loader","loading"],["loader",""],["d","M50.287,32A18.287,18.287,0,1,1,32,13.713a1.5,1.5,0,1,1,0,3A15.287,15.287,0,1,0,47.287,32a1.5,1.5,0,0,1,3,0Z","data-name","Loading"],[1,"login-question"],["routerLink","/login"],[1,"error-message"]],template:function(n,e){1&n&&(s.YNc(0,m,2,0,"h1",0),s.YNc(1,w,42,33,"div",1),s._UZ(2,"app-snackbar")),2&n&&(s.Q6J("ngIf",e.match),s.xp6(1),s.Q6J("ngIf",!e.match))},directives:[r.O5,c.h,a._Y,a.JL,a.sg,r.mk,a.Fj,a.JJ,a.u,o.yS],styles:['@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");.light-theme[_ngcontent-%COMP%]{--main-color-1:#0058dc;--main-color-2:#0042a5;--main-color-3:#0058dc;--main-danger-color:red;--main-text-color-1:#000;--main-text-color-2:#fff;--main-bg-1:#fff;--main-bg-2:linear-gradient(180deg,#0058dc,#00327d);--main-bg-3:#e3e3e3;--main-bg-4:#fafafa;--main-bg-5:#e3e3e3;--main-bg-6:#fff;--main-bg-7:#0058dc;--main-hover-1:#adadad}.dark-theme[_ngcontent-%COMP%]{--main-color-1:#001330;--main-color-2:#0042a5;--main-color-3:#fff;--main-danger-color:red;--main-text-color-1:#fff;--main-text-color-2:#000;--main-bg-1:#000d1f;--main-bg-2:linear-gradient(180deg,#0058dc,#00327d);--main-bg-3:#001b44;--main-bg-4:#001330;--main-bg-5:#001d49;--main-bg-6:#001d49;--main-bg-7:#003c97;--main-hover-1:#adadad}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{display:none}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{position:relative;height:100vh}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;display:grid;grid-gap:15px;gap:15px;width:80%;max-width:400px;transform:translate(-50%,-50%);font-family:Raleway,sans-serif}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;text-align:center}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .description-form[_ngcontent-%COMP%]{display:none}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:2px solid var(--main-text-color-1);box-shadow:none;border-radius:5px;font-family:Raleway,sans-serif;padding:0 10px;outline:none;color:var(--main-text-color-1);font-size:14px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--main-text-color-1)}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{display:block;color:var(--main-danger-color);margin-top:5px;font-weight:700;font-size:14px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid var(--main-danger-color);color:var(--main-danger-color)}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--main-danger-color)}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]{display:block;height:40px;background-color:var(--main-color-1);border-radius:5px;border:none;cursor:pointer;color:var(--main-text-color-2);font-weight:700;transition:background-color .3s ease,color .3s ease,box-shadow .3s ease;display:flex;align-items:center;justify-content:center}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover{background-color:var(--main-color-2)}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:50px;fill:#fff;display:none}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]   svg.visible[_ngcontent-%COMP%]{display:block}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-question[_ngcontent-%COMP%]{text-align:center;font-size:14px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-question[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-weight:600;color:var(--main-color-1)}@media (min-width:768px){.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:40px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%], .register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:48px}}@media (min-width:1300px){.register-page-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 5fr;font-family:Raleway,sans-serif}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:70px 10%;background:var(--main-bg-2)}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:500;color:var(--main-text-color-2);font-size:30px}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:72px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;max-width:1058px;grid-template-columns:1fr 1fr;grid-gap:36px;gap:36px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:left}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .description-form[_ngcontent-%COMP%]{display:block;grid-column:1/3;width:554px;margin-bottom:12px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]{max-width:152px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .login-question[_ngcontent-%COMP%]{grid-row:7/8;text-align:left}}@media (min-width:1600px){.register-page-container[_ngcontent-%COMP%]{grid-template-columns:1.8fr 5fr}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{padding:70px 13%}.register-page-container[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:35px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:45px}.register-page-container[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]{font-size:15px}}']}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.Bz.forChild(Z)],o.Bz]}),n})();var y=t(5425);let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[r.ez,b,a.UX,y.m]]}),n})()}}]);
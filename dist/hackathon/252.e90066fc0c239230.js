"use strict";(self.webpackChunkhackathon=self.webpackChunkhackathon||[]).push([[252],{3252:(m,u,t)=>{t.r(u),t.d(u,{RegisterModule:()=>i});var d=t(6895),l=t(6773),n=t(433),o=t(8256);class a{constructor(e,c){this.fb=e,this.router=c,this.form=this.fb.group({name:["",n.kI.required],email:["",n.kI.required],password:["",n.kI.required]})}register(){const e=this.form.value;e.email&&e.password?(console.log("User added"),this.router.navigateByUrl("/chat")):alert("Please fill all credentials!")}}a.\u0275fac=function(e){return new(e||a)(o.Y36(n.qu),o.Y36(l.F0))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-register"]],decls:17,vars:2,consts:[[1,"login-container"],[1,"login-form",3,"formGroup"],[1,"form-fields"],[1,"form-field"],["name","name","formControlName","name","placeholder","Full name"],["name","email","formControlName","email","placeholder","Email"],["name","password","formControlName","password","type","password","placeholder","Password"],[1,"form-buttons"],[1,"button","button-primary",3,"click"],[1,"sign_in"],[3,"routerLink"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3),o._UZ(4,"input",4),o.qZA(),o.TgZ(5,"div",3),o._UZ(6,"input",5),o.qZA(),o.TgZ(7,"div",3),o._UZ(8,"input",6),o.qZA()(),o.TgZ(9,"div",7)(10,"button",8),o.NdJ("click",function(){return c.register()}),o._uU(11,"Register"),o.qZA()()(),o.TgZ(12,"div",9),o._uU(13," Do you have an account?"),o._UZ(14,"br"),o.TgZ(15,"a",10),o._uU(16,"Sign in"),o.qZA()()()),2&e&&(o.xp6(1),o.Q6J("formGroup",c.form),o.xp6(14),o.Q6J("routerLink","/auth/login"))},dependencies:[l.rH,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],styles:[".form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;padding:12px;border-radius:5px;cursor:pointer;margin-top:20px;font-size:15px;border:1px solid #45A29E;width:calc(100% - 24px);background:#1F2833;font-style:normal;color:#f5f5f5}input[_ngcontent-%COMP%]::placeholder{color:#f5f5f5}.form-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}button[_ngcontent-%COMP%]{outline:none;font-size:18px;color:#f5f5f5;background:#1F2833;border-radius:5px;width:100%;padding:15px;cursor:pointer;margin-top:50px;border:1px solid #45A29E;font-style:normal}.sign_in[_ngcontent-%COMP%]{margin-top:50px;text-align:center;font-size:24px}.sign_in[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:15px;color:#00bfff;text-decoration:none}"]});const p=[{path:"",component:a}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[l.Bz.forChild(p),l.Bz]});class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[d.ez,r,n.UX]})}}]);
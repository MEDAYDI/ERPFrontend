import { HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/Model/login-response';
import { User } from 'src/app/Model/user';
import { OrdreService } from 'src/app/service/ordre.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   checkbox!:any;
  invalidUser:boolean=false;
  credenatials={
    username:'',
    password:''
  }
  user:User=new User();

  constructor(private userService:UserserviceService ,
    private auth:UserAuthServiceService,
    private router:Router,
    private orderservice:OrdreService
    ) { }

  ngOnInit(): void {

  }

  public signupmode():void{
    const cont  = document.querySelector(".cont");
       cont?.classList.add("sign-up-mode");
   }


   public signinmode():void{
    const cont  = document.querySelector(".cont");
    cont?.classList.remove("sign-up-mode");
   }

   public userRegister():void{
         this.userService.userRegister(this.user)
         .subscribe(
          (res:User)=>{
            alert("check your inbox to activate your account ");
            this.signinmode();

          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }
        );
   }

   userLogIn():void{

          this.userService.doLogin(this.credenatials).subscribe(
            (res)=>{
              this.invalidUser=false ;
              this.auth.setToken(res.access_token,res.refrech_token);
              this.auth.setRoles(res.role);
              this.router.navigate([``]);
            },
            error => {

               this.invalidUser=true ;
            },

          )
   }

}

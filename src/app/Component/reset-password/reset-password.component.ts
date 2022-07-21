import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordRequest } from 'src/app/Model/change-password-request';
import { ForgetPasswordService } from 'src/app/service/forget-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errPassword:boolean=false;
  newpassword={
     password:'',
     confirmpassword:''
  }

  changePasswordRequest:ChangePasswordRequest = new ChangePasswordRequest();

  constructor(private route:Router , private forgetPassword:ForgetPasswordService  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('resetPasswordToken')==null){
      this.route.navigate(['login']);
    }
  }

  public changePassword(){
    if(this.newpassword.password==this.newpassword.confirmpassword){
        this.changePasswordRequest.password=this.newpassword.password;
        this.changePasswordRequest.token=localStorage.getItem('resetPasswordToken');
        this.forgetPassword.changePassword(this.changePasswordRequest).subscribe(
          (res:any)=>{
            this.route.navigate(['login']);
            this.errPassword=false ;
            localStorage.removeItem('resetPasswordToken');
          },(error:HttpErrorResponse)=>{
            alert(error.message);
          }
        );
    }else{
         this.errPassword=true ;
    }
  }

}

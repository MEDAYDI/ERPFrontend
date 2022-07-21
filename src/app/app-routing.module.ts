import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';




const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

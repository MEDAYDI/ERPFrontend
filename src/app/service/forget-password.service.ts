import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgrtPasswordRespnse } from '../Model/forgrt-password-respnse';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  api:string="http://localhost:8081"

  constructor(private http:HttpClient) { }

  public findUserName(username:any):Observable<ForgrtPasswordRespnse>{

    return this.http.post<ForgrtPasswordRespnse>(`${this.api}/api/resetpassword`,username);

  }

  public changePassword(request:any):Observable<any>{
    return this.http.post<any>(`${this.api}/api/resetpassword/confirm`,request);
  }


}

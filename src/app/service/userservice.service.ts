import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Model/login-response';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  api:string="http://localhost:8081";





  constructor(private http:HttpClient) { }

  public userRegister(user:User):Observable<User>{
    
    return this.http.post<User>(`${this.api}/api/registration`,user);
  }

 public doLogin(credenatials:any):Observable<LoginResponse>{

    return this.http.post<LoginResponse>(`${this.api}/api/login`, credenatials);
  }
}

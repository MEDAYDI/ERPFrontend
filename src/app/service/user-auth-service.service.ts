import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor() { }

  public setRoles(role:string){
    localStorage.setItem('role',role);
  }

  public getRole(): string | null{
    return localStorage.getItem('role')
  }


  public setToken(accessjwtToken:string,refrechjwtToken:string){
    localStorage.setItem('accessjwtToken',accessjwtToken);
    localStorage.setItem('refrechjwtToken',refrechjwtToken);

  }

  public getAccessTokn() : string | null{
    return localStorage.getItem('accessjwtToken');
  }

  public getRefrechTokn() : string | null{
    return localStorage.getItem('refrechjwtToken');
  }

  public clean(){
    localStorage.clear();
  }

  public isLogeedIn(){
    return  this.getRole() && this.getAccessTokn () && this.getRefrechTokn();
  }

















}

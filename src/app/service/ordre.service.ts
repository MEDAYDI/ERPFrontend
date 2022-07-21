import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ordre } from '../Model/ordre';
import { UserAuthServiceService } from './user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrdreService {

  api:string="http://localhost:8081/api/order";


  constructor(private http:HttpClient , private auth:UserAuthServiceService) { }

  requestHeader = new HttpHeaders().set(
    'Authorization',`Bearer ${this.auth.getAccessTokn()}`)

  getOrder( ):Observable<Ordre[]>{
    return this.http.get<Ordre[]>(`${this.api}`,{headers:this.requestHeader})
    .pipe(map(response => response));
  }

  addOrder(order:Ordre):Observable<Ordre>{
    return this.http.post<Ordre>(`${this.api}`,order,{headers:this.requestHeader});
  }

  updateOrder(order: Ordre,id:number):Observable<Ordre>{
    return this.http.put<Ordre>(`${this.api}/update/${id}`,order,{headers:this.requestHeader});
  }

  deleteOrder(bookId: number):Observable<void>{
    return this.http.delete<void>(`${this.api}/delete/${bookId}`,{headers:this.requestHeader});
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Ordre } from 'src/app/Model/ordre';
import { OrdreService } from 'src/app/service/ordre.service';
import { UserAuthServiceService } from 'src/app/service/user-auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  order:Ordre=new Ordre();
  orders!:Ordre[];
  i!:number;
  editOrder :Ordre=new Ordre ;
  deleteOrderId!:number;
  editOrderId!:number;

  constructor(private ordreservice:OrdreService , private auth:UserAuthServiceService,private route:Router ,
    ) { }

  ngOnInit(): void {
    if(this.auth.isLogeedIn()){
      this.getallOrder();
    }else{
      this.route.navigate(['login']);
    }
  }

  public getallOrder():void{
    this.ordreservice.getOrder().subscribe(
      (response:Ordre[])=>{
       this.orders=response;
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);

      }
    )
  }


  public addOrder():void{
      this.ordreservice.addOrder(this.order)
      .subscribe(
        (res:Ordre)=>{
          this.getallOrder();
        },
        (error:HttpErrorResponse)=>{
          console.log(error.message);
        }
      )
  }

  public logout(){
    this.auth.clean();
    this.route.navigate(['login']);
  }

  public searchOf(key:string):void {

    const result:Ordre[]=[];
    for(const order of this.orders){
      if (order.of.indexOf(key) !==-1) {
        result.push(order);

      }
    }
    this.orders=result;
    if (result.length=== 0 || !key) {
      this.getallOrder();

    }

  }

  public searchClient(key:string):void {

    const result:Ordre[]=[];
    for(const order of this.orders){
      if (order.client.toLowerCase().indexOf(key.toLowerCase()) !==-1) {
        result.push(order);

      }
    }
    this.orders=result;
    if (result.length=== 0 || !key) {
      this.getallOrder();

    }

  }

  public searchLot(key:string):void {

    const result:Ordre[]=[];
    for(const order of this.orders){
      if (order.lot.indexOf(key) !==-1) {
        result.push(order);

      }
    }
    this.orders=result;
    if (result.length=== 0 || !key) {
      this.getallOrder();

    }

  }

  editorder(order:Ordre):void{
    console.log(order);
    this.ordreservice.updateOrder(this.editOrder,this.editOrderId)
    .subscribe(
      (res:Ordre)=>{
        this.getallOrder();
      },
     (error:HttpErrorResponse)=>{
          alert(error.message);

    })

  }

  deleteOrder():void{
    this.ordreservice.deleteOrder(this.deleteOrderId)
    .subscribe(
      (res:void)=>{

        this.getallOrder();
      },
     (error:HttpErrorResponse)=>{
          alert(error.message);

    })

}


}

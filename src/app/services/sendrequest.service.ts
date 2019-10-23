import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

import { InvoiceModel } from '../models/invoice.model';
import { InvoiceService } from '../services/invoice.service';




@Injectable({
  providedIn: 'root',
})
export class SendRequestService implements OnInit{
invoiceData:InvoiceModel;
  constructor(
    private httpClient: HttpClient,
    private data: InvoiceService,
  ){}

  ngOnInit() {
      this.data.invoiceData.subscribe(invoiceData => this.invoiceData = invoiceData)
    }



    // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      url="http://192.168.20.126:8080/createFromBill";
  //  url="http://192.168.20.126:8080/bill";
  //    url="http://dummy.restapiexample.com/api/v1/employees"

      getBill() {
        console.log("GetBill")
    console.log(
        this.httpClient.get(this.url,this.httpOptions)
      )
      this.httpClient.get(this.url,this.httpOptions).subscribe((res)=>{
                console.log(res);
            });
      }


      postBill() {
        console.log("PostBill")
        console.log(
      //  this.singleFormComponent.invoiceModel.creditorAccount
        this.invoiceData.creditorAccount


        );
      }
}

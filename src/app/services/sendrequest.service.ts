import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { SingleFormComponent } from '../forms/singleform/singleform.component';
import { InvoiceModel } from '../models/invoice.model';




@Injectable({
  providedIn: 'root',
})
export class SendRequestService {



  constructor(
    private httpClient: HttpClient,
    private singleFormComponent: SingleFormComponent,

  ){}


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
        //var invoiceModel  = new InvoiceModel();
        console.log("PostBill")
        console.log(
        this.singleFormComponent.invoiceModel.creditorAccount




        );
  //  console.log(
  //      this.httpClient.post(this.url,InvoiceModel,this.httpOptions)
  //    )
  //    this.httpClient.post(this.url,InvoiceModel,this.httpOptions).subscribe((res)=>{
  //              console.log(res);
  //          });
      }

      Generate(){
        console.log("Generate");
      }
}

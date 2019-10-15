import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { SingleFormComponent } from '../forms/singleform/singleform.component'

@Injectable({
  providedIn: 'root',
})


export class SendRequestService {
  //invoiceModel:InvoiceModel = new InvoiceModel();
  singleForm:SingleFormComponent = new SingleFormComponent()
  constructor(
    private httpClient: HttpClient,

  ){}

    // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    url="http://192.168.1.30:8080/bill";
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

      Generate(){
        console.log(this.singleForm.invoiceModel.creditorAccount);
      }
}

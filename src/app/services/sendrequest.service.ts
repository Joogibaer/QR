import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})


export class SendRequestService {

  constructor(private httpClient: HttpClient){}

    // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    url="http://192.168.1.30:8080/bill";

      getBill() {
        console.log("GetBill")
    console.log(
        this.httpClient.get(this.url,this.httpOptions)
      )
      this.httpClient.get(this.url,this.httpOptions).subscribe((res)=>{
                console.log(res);
            });

      }

      test(){
        console.log("test function");
      }
}

import { Component } from '@angular/core';
//import { ConfigService } from '../services/sendrequest.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';


@Component({
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],

})
export class SingleComponent {
  constructor(private httpClient: HttpClient){}

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

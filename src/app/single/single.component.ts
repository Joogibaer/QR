import { Component } from '@angular/core';
//import { ConfigService } from '../services/sendrequest.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';


@Component({
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],

})
export class SingleComponent {
  constructor(private httpClient: HttpClient){}

    url="192.168.1.30:8080/bill";

  getBill() {
    this.httpClient.get(this.url)
  }





}

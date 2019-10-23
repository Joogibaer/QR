import { Component } from '@angular/core';
//import { ConfigService } from '../services/sendrequest.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { SendRequestService } from '../services/sendrequest.service';
//https://stackoverflow.com/questions/45741480/how-to-use-angular-injectable-with-a-function-not-a-class
import { InvoiceModel } from '../models/invoice.model';

@Component({
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],

})
export class SingleComponent {
  constructor(
    private sendRequestService: SendRequestService,

  ){}

 invoiceModel = new InvoiceModel();

getBill(){
  this.sendRequestService.getBill();
}
postBill(){
  this.sendRequestService.postBill();
}

}

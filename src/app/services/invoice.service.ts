import { Injectable } from '@angular/core';
import { InvoiceModel } from '../models/invoice.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InvoiceService{


//  invoiceModel = new BehaviorSubject<InvoiceModel>(null);

  private dataSource = new BehaviorSubject<any>(new InvoiceModel());
  invoiceData = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(invoiceData: InvoiceModel){
    this.dataSource.next(invoiceData);
  }
}

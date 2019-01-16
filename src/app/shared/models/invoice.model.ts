import { Component } from '@angular/core';


@Component({
  selector: 'formsinvoice',


})
export class FormsInvoiceComponent{
    public massage:string;
    invoice:Invoice;
    invoices:Array<Invoice>;
  }


export class Invoice {
  creditorAccount:string='';
  creditorReference:string='';
  creditorName:string='';
  creditorStreet:string='';
  creditorHouseNumber:string='';
  creditorZip:string='';
  creditorCity:string='';
  creditorCountry:string='';
  creditorInformations:string='';
  debtorName:string='';
  debtorStreet:string='';
  debtorHouseNumber:string='';
  debtorZip:string='';
  debtorCity:string='';
  debtorCountry:string='';
  debtorDueDate:string='';
  debtorCurrency:string='';
  debtorAmount:string='';
  constructor(creditorAccount:string,creditorReference:string){
    this.creditorAccount=creditorAccount,
    this.creditorReference=creditorReference
}

//loadInvoice(){
//  this.invoices =[
  //  new Invoice("test1","test2"),
    //new Invoice("test3","test4"),
    //new Invoice("test5","test6"),
//  ]
//  this.message = this.invoices[2].creditorAccount;
}

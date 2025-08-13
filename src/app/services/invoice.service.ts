import { Injectable } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { invoice } from '../data/invoice.data'; 

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoice;
  
  constructor() { }


  getInvoice(): Invoice {
    return this.invoice;
  }
}

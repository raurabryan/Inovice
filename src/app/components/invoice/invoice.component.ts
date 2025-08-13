import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyViewComponent } from "../company-view/company-view.component";
import { CustomerViewComponent } from "../customer-view/customer-view.component";
import { InvoiceDetailComponent } from "../invoice-detail/invoice-detail.component";

@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetailComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor( private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
  
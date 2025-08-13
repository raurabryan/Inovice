import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'tr [invoice-item]',
  imports: [],
  templateUrl: './invoice-item.component.html',
  
})
export class InvoiceItemComponent {
  @Input() item!: InvoiceItem;
}

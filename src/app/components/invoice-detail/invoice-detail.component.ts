import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa esto
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';

@Component({
  selector: 'invoice-detail',
  imports: [CommonModule, InvoiceItemComponent], // <-- Agrega CommonModule aquí
  templateUrl: './invoice-detail.component.html',
})
export class InvoiceDetailComponent {
  @Input() items!: InvoiceItem[];
}

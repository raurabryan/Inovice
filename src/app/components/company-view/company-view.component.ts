import { Component, Input } from '@angular/core';
import { Company } from '../../model/Company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.component.html',
  
})
export class CompanyViewComponent {
  @Input() company !: Company 
}

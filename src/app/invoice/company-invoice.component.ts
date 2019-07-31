import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service'
import { ClientAuthGuard } from '../role-authentication/auth-guard-client.service';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  animations: [fadeInAnimation]
})
export class CompanyInvoiceComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  invoices: any[];

  companyId = -1;

  constructor (private dataService: DataService, private clientAuth: ClientAuthGuard) {
    this.companyId = this.getCompany().id;
  }

  ngOnInit() { this.getInvoices(); }

  getCompany() {
    return this.clientAuth.companyAccess();
  }

  getInvoices() {
    this.dataService.getRecord("invoice/company", this.companyId)
      .subscribe(
        results => this.invoices = results,
        error =>  this.errorMessage = <any>error);
  }
}

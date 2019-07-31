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
  reverse: boolean;

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
        results => this.invoices = results.sort((a,b)=> b.createdOn.localeCompare(a.createdOn)),
        error =>  this.errorMessage = <any>error);
  }

  sortBy(category){
      if(this.reverse=== false){
        this.reverse = true;
        if( category === 'id' || category === 'total' || category === "lineItems.length" ){
          return this.invoices.sort((a,b)=> b[category] - a[category])
        }
        if (category === 'client'){
          return this.invoices.sort((a,b)=> a.client.name.localeCompare(b.client.name))
        }
        if(category === 'rate'){
          return this.invoices.sort((a,b)=> a.rate.localeCompare(b.rate))
        }
        if( category === 'createdBy'){
          return this.invoices.sort((a,b)=> a.createdBy.username.localeCompare(b.createdBy.username))
        }
        return this.invoices.sort((a,b)=> b[category].localeCompare(a[category]));

      } else{
        this.reverse= false;
        if( category === 'id' || category === 'total' || category === "lineItems.length" ){
          return this.invoices.sort((a,b)=> a[category] - b[category])
        }
        if (category === 'client'){
          return this.invoices.sort((a,b)=> b.client.name.localeCompare(a.client.name))
        }
        if(category === 'rate'){
          return this.invoices.sort((a,b)=> b.rate.localeCompare(a.rate))
        }
        if( category === 'createdBy'){
          return this.invoices.sort((a,b)=> b.createdBy.username.localeCompare(a.createdBy.username))
        }
        return this.invoices.sort((a,b)=> a[category].localeCompare(b[category]));
      }
    }

}

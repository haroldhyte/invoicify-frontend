import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';

import { compareDates } from '../common-functions/date-compare';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  animations: [fadeInAnimation]
})
export class InvoiceComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  invoices: any[];
  reverse: boolean;

  companyId = -1;

  constructor (private dataService: DataService) {}

  ngOnInit() { this.getInvoices(); }

  getInvoices() {
    this.dataService.getRecords("invoice")
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
          return this.invoices.sort((a,b)=> a.company.name.localeCompare(b.company.name))
        }
        if(category === 'rate'){
          return this.invoices.sort((a,b)=> a.rate.localeCompare(b.rate))
        }
        if( category === 'createdBy'){
          return this.invoices.sort((a,b)=> a.createdBy.username.localeCompare(b.createdBy.username))
        }
        if( category === 'dueDate'){
          return this.invoices.sort((a, b)=> { return compareDates(a, b); });
        }
        if( category === 'createdOn'){
          return this.invoices.sort((a, b)=> { return compareDates(a, b); });
        }
        return this.invoices.sort((a,b)=> b[category].localeCompare(a[category]));

      } else{
        this.reverse= false;
        if( category === 'id' || category === 'total' || category === "lineItems.length" ){
          return this.invoices.sort((a,b)=> a[category] - b[category])
        }
        if (category === 'client'){
          return this.invoices.sort((a,b)=> b.company.name.localeCompare(a.company.name))
        }
        if(category === 'rate'){
          return this.invoices.sort((a,b)=> b.rate.localeCompare(a.rate))
        }
        if( category === 'createdBy'){
          return this.invoices.sort((a,b)=> b.createdBy.username.localeCompare(a.createdBy.username))
        }
        if( category === 'dueDate'){
          return this.invoices.sort((a, b)=> { return compareDates(b, a); });
        }
        if( category === 'createdOn'){
          return this.invoices.sort((a, b)=> { return compareDates(b, a); });
        }
        return this.invoices.sort((a,b)=> a[category].localeCompare(b[category]));
      }
    }

}

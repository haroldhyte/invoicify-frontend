import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-billing-record',
  templateUrl: './billing-record.component.html',
  styleUrls: ['./billing-record.component.css'],
  animations: [fadeInAnimation]
})
export class BillingRecordComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  billingRecords: any[];
 

  constructor (private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() { this.getBillingRecords(); }

  getBillingRecords() {
    this.dataService.getRecords("billing-record")
      .subscribe(
        results => this.billingRecords = results.sort((a,b)=> b.status.localeCompare(a.status)),
        error =>  this.errorMessage = <any>error);
  }

  sortBy(category){
    if( category=== 'id' || category === 'total'){
     return this.billingRecords.sort((a,b)=> b[category] - a[category])
    } 
    if (category === 'client'){
      return this.billingRecords.sort((a,b)=> a.client.name.localeCompare(b.client.name))
    }
    if(category === 'rate'){
      return this.billingRecords.sort((a,b)=> a.rate.localeCompare(b.rate))
    }
    if( category === 'createdBy'){
      return this.billingRecords.sort((a,b)=> a.createdBy.username.localeCompare(b.createdBy.username))
    }
    return this.billingRecords.sort((a,b)=> b[category].localeCompare(a[category]));
    } 

}


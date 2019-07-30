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

  COLOR_STATUS = {
    overdue: 'alert',
    warning: 'alertyellow',
    alert: 'class_style_here',
    unpaid: 'alert'
  };

  constructor (private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() { this.getBillingRecords(); }

  getBillingRecords() {
    this.dataService.getRecords("billing-record")
      .subscribe(
        results => this.billingRecords = results,
        error =>  this.errorMessage = <any>error);
  }

  compareDate(d) {
    const date = new Date(d);
    const now = new Date(Date.now())
    if( date < now) {
      return this.COLOR_STATUS['overdue']
    }
  }

  payBillingRecord(billingRecordId) {

    let endpoint = "billing-record/status"
    endpoint += "/" + billingRecordId

    let date = new Date()
    let status = "Paid " + date.toLocaleDateString('en-US')

    this.dataService.editRecordField(endpoint, "status", status)
      .subscribe(
        result => {
          this.successMessage = "Record paid successfully",
          this.getBillingRecords()
        },
        error => this.errorMessage = <any>error
      );

  }

  deleteBillingRecord(billingRecordId) {
    let endpoint = "billing-record"
    endpoint += "/" + billingRecordId

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.deleteRecord(endpoint)
        .subscribe(
          response => {
            this.successMessage = "Record deleted successfully"
            this.getBillingRecords()
          },
          error => {this.errorMessage = <any>error}
        )
      }   
    })
  }
}

  compareDateAndStatus(BillingRecord) {
    const dueDate = new Date(BillingRecord.dueDate);
    const now = new Date(Date.now())
    const twoDaysFromNow = new Date (new Date().getTime() + (2 * 24 * 60 * 60 * 1000))
   
    if( (dueDate < now ) && BillingRecord.status == "Unpaid") {
      return this.COLOR_STATUS['overdue']
    }
    if((twoDaysFromNow >= dueDate || dueDate <= now ) && BillingRecord.status == "Unpaid") {
      return this.COLOR_STATUS['warning']
    }
  } 
}

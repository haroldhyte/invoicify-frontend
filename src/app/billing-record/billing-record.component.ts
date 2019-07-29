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
        results => this.billingRecords = results,
        error =>  this.errorMessage = <any>error);
  }

  payBillingRecord(billingRecordId) {

    let endpoint = "billing-record/status"
    endpoint += "/" + billingRecordId

    let date = new Date()
    let status = "Paid " + date.toLocaleDateString('en-US')

    //console.log(status) //DEBUG

    this.dataService.editRecordField(endpoint, "status", status)
      .subscribe(
        result => {
          this.successMessage = "Record paid successfully",
          location.reload()
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
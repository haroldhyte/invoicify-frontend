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
    overdue: 'overdue',
    warning: 'billwarning',
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

}

import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { AuthService } from '../auth.service'
import { ClientAuthGuard } from '../role-authentication/auth-guard-client.service';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'
import { fadeInAnimation } from '../animations/fade-in.animation';


@Component({
  selector: 'app-billing-record',
  templateUrl: './billing-record.component.html',
  styleUrls: ['./billing-record.component.css'],
  animations: [fadeInAnimation]
})
export class CompanyBillingRecordComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  billingRecords: any[];

  COLOR_STATUS = {
    overdue: 'alert',
    warning: 'alertyellow',
    alert: 'class_style_here',
    unpaid: 'alert'
  };

  companyId = -1;

  constructor (private dataService: DataService, public dialog: MatDialog,
    private clientAuth: ClientAuthGuard) {
      this.companyId = this.getCompany().id);
      console.log(this.clientAuth.companyAccess());
      console.log(this.companyId);
    }

  ngOnInit() { this.getBillingRecords(); }

  getCompany() {
    return parseInt(this.clientAuth.companyAccess());
  }

  getBillingRecords() {
    //let companyId = this.clientAuth.companyAccess();
    this.dataService.getRecord("billing-record/company", this.companyId)
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

    //console.log(status) //DEBUG

    this.dataService.editRecordField(endpoint, "status", status)
      .subscribe(
        result => {
          this.successMessage = "Record paid successfully",
          this.getBillingRecords()
        },
        error => this.errorMessage = <any>error
      );
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

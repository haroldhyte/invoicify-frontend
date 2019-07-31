import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { fadeInAnimation } from '../animations/fade-in.animation';

import { MatDialog, MatDialogRef } from '@angular/material';
import { BillingRecordComponent } from '../billing-record/billing-record.component';

@Component({
  selector: 'app-billing-record-form',
  templateUrl: './billing-record-form.component.html',
  styleUrls: ['./billing-record-form.component.css'],
  animations: [fadeInAnimation]
})
export class BillingRecordFormComponent implements OnInit {

  billingRecordForm: NgForm;
  @ViewChild('billingRecordForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  companies: any[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,

    private dialog: MatDialog
  ) { }

  ngOnInit(){
    this.getCompanies()
  }

  getCompanies() {
    this.dataService.getRecords("company")
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

  saveBillingRecord(billingRecordForm: NgForm) {

    let endpoint = "billing-record/rate-based"

    if(billingRecordForm.value.recordType === "flatfee"){
      endpoint = "billing-record/flat-fee"
    }

    endpoint += "/" + billingRecordForm.value.client

    delete(billingRecordForm.value.client)

    let billingRecord = new BillingRecordComponent(this.dataService, this.dialog);

    let date = new Date(billingRecordForm.value.dueDate + " 0:00:01")
    billingRecordForm.value.dueDate = date.toLocaleDateString()

    this.dataService.addRecord(endpoint, billingRecordForm.value)
      .subscribe(
        result => { this.successMessage = "Record added successfully"
          if(result.status === "Paid") {
            billingRecord.payBillingRecord(result.id)
          }
          console.log(result)
        },
        error => this.errorMessage = <any>error
      );

    this.billingRecordForm.reset()
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.billingRecordForm = this.currentForm;
    this.billingRecordForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.billingRecordForm.form;

    for (let field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'description': '',
    'rate': '',
    'quantity': '',
    'amount': '',
    'status': '',
    'dueDate' : ''
  };

  validationMessages = {
    'description': {
      'required': 'Description is required.',
      'minlength': 'Description must be at least 5 characters long.',
      'maxlength': 'Description name cannot be more than 30 characters long.'
    },
    'rate': {
      'pattern': 'Must be a numeric value'
    },
    'quanity': {
      'pattern': 'Must be a numeric value'
    },
    'amount': {
      'pattern': 'Must be a numeric value'
    },
    'status': {
      'required': 'A payment status is required.'
    },
    'dueDate': {
      'required': 'A due date is required.',
      'pattern' : 'Must be a valid Date (MM/DD/YYYY)'
    }
  };
}

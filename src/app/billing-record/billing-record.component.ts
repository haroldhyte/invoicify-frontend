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
  hasUnpaidBills: boolean;
  companiesWithBills: any[] = [];
  mySetCompaniesWithBills: Set<string> = new Set();
  //arrayCompaniesWithBills = Array.from(this.companiesWithBills.values());
  reverse: boolean;
 

  COLOR_STATUS = {
    overdue: 'alert',
    warning: 'alertyellow',
    alert: 'class_style_here',
    unpaid: 'alert'
  };

  constructor (private dataService: DataService, public dialog: MatDialog) {
    // this.billingRecords = [];
    // this.hasUnpaidBills = false;
  }

  ngOnInit() { 
    this.getBillingRecords();
  }
  checkUnpaidBills() {
    const now = new Date(Date.now())
    const twoDaysFromNow = new Date (new Date().getTime() + (2 * 24 * 60 * 60 * 1000))
    for(let i = 0; i < this.billingRecords.length; i++) {
      const dueDate = new Date(this.billingRecords[i].dueDate)
      if (this.billingRecords[i].status == 'Unpaid' && now > dueDate) {
         this.mySetCompaniesWithBills.add(this.billingRecords[i].client.name)
      }
    }
  }

  
  getBillingRecords() {
    this.dataService.getRecords("billing-record")
      .subscribe(
        results => {
          this.billingRecords = results
          this.checkUnpaidBills();
        },
        error =>  this.errorMessage = <any>error);
  }

sortBy(category){
    if(this.reverse=== false){
      this.reverse = true;
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

    } else{
      this.reverse= false;
      if( category=== 'id' || category === 'total'){
        return this.billingRecords.sort((a,b)=> a[category] - b[category])
      }
      if (category === 'client'){
        return this.billingRecords.sort((a,b)=> b.client.name.localeCompare(a.client.name))
      }
      if(category === 'rate'){
        return this.billingRecords.sort((a,b)=> b.rate.localeCompare(a.rate))
      }
      if( category === 'createdBy'){
        return this.billingRecords.sort((a,b)=> b.createdBy.username.localeCompare(a.createdBy.username))
      }
      return this.billingRecords.sort((a,b)=> a[category].localeCompare(b[category]));
    }
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


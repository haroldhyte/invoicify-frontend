import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  animations: [fadeInAnimation]
})
export class UserFormComponent implements OnInit {

  userForm: NgForm;
  @ViewChild('userForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;
  companies: any[];

  user: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("user", +params['id']))
      .subscribe(result => this.user = result);
  }

  ngOnInit() {
    this.getCompanies();
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });
  }

  saveUser(userForm: NgForm){
    if(userForm.value.password === ""){
      delete(userForm.value.password)
    }
    if(typeof userForm.value.id === "number"){
      this.dataService.editRecord("user", userForm.value, userForm.value.id)
          .subscribe(
            company => this.successMessage = "Record updated successfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("user", userForm.value)
          .subscribe(
            result => this.successMessage = "Record added successfully",
            error =>  this.errorMessage = <any>error);
            this.user = {};
            this.userForm.reset()
    }

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.userForm = this.currentForm;
    this.userForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  getCompanies() {
    this.dataService.getRecords("company")
      .subscribe(
        companies => this.companies = companies,
        error =>  this.errorMessage = <any>error);
  }

  onValueChanged(data?: any) {
    let form = this.userForm.form;

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
    'username': '',
    'password': '',
    'type': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 5 characters long.',
      'maxlength': 'Company name cannot be more than 30 characters long.'
    },
    'password': {
      'pattern': 'Password must be at least one upper case letter, at least one lower case English letter, at least one digit, at least one special character, and 8 characters in length',
      'minlength': ''
    },
    'type': {
      'required': 'User type is required',
      'pattern': 'Type must be one of the following: Admin, Ally, or Client'
    }
  };

}

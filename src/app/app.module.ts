import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { StatusMessageComponent } from './status-message/status-message.component';

import { AuthGuard } from './auth-guard.service';
import { ClientAuthGuard } from './role-authentication/auth-guard-client.service';
import { AllyAuthGuard } from './role-authentication/auth-guard-ally.service';
import { AdminAuthGuard } from './role-authentication/auth-guard-admin.service';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BillingRecordComponent } from './billing-record/billing-record.component';
import { CompanyBillingRecordComponent } from './billing-record/company-billing-record.component';
import { BillingRecordFormComponent } from './billing-record-form/billing-record-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CompanyComponent,
    HomeComponent,
    DeleteConfirmComponent,
    CompanyFormComponent,
    StatusMessageComponent,
    UserComponent,
    UserFormComponent,
    BillingRecordComponent,
    CompanyBillingRecordComponent,
    BillingRecordFormComponent,
    InvoiceFormComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [DeleteConfirmComponent],
  providers: [DataService, AuthGuard, ClientAuthGuard, AllyAuthGuard, AdminAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import { ClientAuthGuard } from '../role-authentication/auth-guard-client.service';
import { AllyAuthGuard } from '../role-authentication/auth-guard-ally.service';
import { AdminAuthGuard } from '../role-authentication/auth-guard-admin.service';

import { CompanyComponent }   from '../company/company.component';
import { CompanyFormComponent }   from '../company-form/company-form.component';
import { HomeComponent }   from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { BillingRecordComponent } from '../billing-record/billing-record.component';
import { CompanyBillingRecordComponent } from '../billing-record/company-billing-record.component';
import { BillingRecordFormComponent } from '../billing-record-form/billing-record-form.component';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { CompanyInvoiceComponent } from '../invoice/company-invoice.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'company',  component: CompanyComponent, canActivate: [AllyAuthGuard] },
  { path: 'company/edit/:id', component: CompanyFormComponent, canActivate: [AllyAuthGuard] },
  { path: 'company/add', component: CompanyFormComponent, canActivate: [AllyAuthGuard] },
  { path: 'user',  component: UserComponent, canActivate: [AdminAuthGuard] },
  { path: 'user/edit/:id', component: UserFormComponent, canActivate: [AdminAuthGuard] },
  { path: 'user/add', component: UserFormComponent, canActivate: [AdminAuthGuard] },
  { path: 'billing-record',  component: BillingRecordComponent, canActivate: [AllyAuthGuard] },
  { path: 'billing-record/add', component: BillingRecordFormComponent, canActivate: [AllyAuthGuard] },
  { path: 'invoice/add', component: InvoiceFormComponent, canActivate: [AllyAuthGuard] },
  { path: 'invoice', component: InvoiceComponent, canActivate: [AllyAuthGuard] },
  { path: 'company-billing-record', component: CompanyBillingRecordComponent, canActivate: [ClientAuthGuard] },
  { path: 'company-invoice', component: CompanyInvoiceComponent, canActivate: [ClientAuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

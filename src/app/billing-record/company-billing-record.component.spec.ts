import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBillingRecordComponent } from './company-billing-record.component';

describe('CompanyBillingRecordComponent', () => {
  let component: CompanyBillingRecordComponent;
  let fixture: ComponentFixture<CompanyBillingRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBillingRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBillingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        // styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delete_confirm_delete_confirm_component__ = __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__company_form_company_form_component__ = __webpack_require__("../../../../../src/app/company-form/company-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__status_message_status_message_component__ = __webpack_require__("../../../../../src/app/status-message/status-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__billing_record_billing_record_component__ = __webpack_require__("../../../../../src/app/billing-record/billing-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__billing_record_form_billing_record_form_component__ = __webpack_require__("../../../../../src/app/billing-record-form/billing-record-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__invoice_form_invoice_form_component__ = __webpack_require__("../../../../../src/app/invoice-form/invoice-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__invoice_invoice_component__ = __webpack_require__("../../../../../src/app/invoice/invoice.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_13__company_form_company_form_component__["a" /* CompanyFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__status_message_status_message_component__["a" /* StatusMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__billing_record_billing_record_component__["a" /* BillingRecordComponent */],
            __WEBPACK_IMPORTED_MODULE_20__billing_record_form_billing_record_form_component__["a" /* BillingRecordFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__invoice_form_invoice_form_component__["a" /* InvoiceFormComponent */],
            __WEBPACK_IMPORTED_MODULE_22__invoice_invoice_component__["a" /* InvoiceComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(dataService) {
        this.dataService = dataService;
    }
    AuthService.prototype.login = function (user) {
        return this.dataService.editRecord("session", user).map(function (result) {
            localStorage.setItem("auth_user", JSON.stringify(result));
        });
    };
    AuthService.prototype.logout = function () {
        return this.dataService.deleteRecord("session").map(function (result) {
            localStorage.removeItem("auth_user");
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem("auth_user");
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/billing-record-form/billing-record-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/billing-record-form/billing-record-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n    <li>\r\n      <a routerLink=\"/home\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/billing-record\">Billing Records</a>\r\n    </li>\r\n    <li class=\"active\">Manage Billing Record</li>\r\n  </ol>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/billing-record\">Return to Billing Records</a>\r\n\r\n  <h1>Manage Billing Record</h1>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <form (ngSubmit)=\"saveBillingRecord(billingRecordForm)\" #billingRecordForm=\"ngForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label for=\"recordType\" class=\"col-sm-2 control-label\">Record Type</label>\r\n      <div class=\"col-sm-10\">\r\n        <select required [ngModel]=\"null\" ngModel #recordType=\"ngModel\" class=\"form-control\" id=\"recordType\" name=\"recordType\">\r\n          <option [ngValue]=\"null\">-- Select Type --</option>\r\n          <option value=\"flatfee\">Flat Fee</option>\r\n          <option value=\"ratebased\">Rate Based</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"client\" class=\"col-sm-2 control-label\">Client</label>\r\n      <div class=\"col-sm-10\">\r\n        <select required [ngModel]=\"null\" ngModel #client=\"ngModel\" class=\"form-control\" id=\"client\" name=\"client\">\r\n          <option [ngValue]=\"null\">-- Select Client --</option>\r\n          <option *ngFor=\"let company of companies\" [ngValue]=\"company.id\">\r\n            {{ company.name }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\" class=\"col-sm-2 control-label\">Description</label>\r\n      <div class=\"col-sm-10\">\r\n        <input ngModel #description=\"ngModel\" type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Description\"\r\n          required minlength=\"5\" maxlength=\"30\">\r\n        <span *ngIf=\"formErrors.description\" class=\"text-danger\">\r\n          {{ formErrors.description }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"billingRecordForm.value.recordType === 'flatfee'\" class=\"form-group\">\r\n      <label for=\"amount\" class=\"col-sm-2 control-label\">Amount</label>\r\n      <div class=\"col-sm-10\">\r\n        <input ngModel #amount=\"ngModel\" type=\"text\" class=\"form-control\" id=\"amount\" name=\"amount\" placeholder=\"e.g. 100.00\" required\r\n          pattern=\"^(\\d*\\.)?\\d+$\">\r\n        <span *ngIf=\"formErrors.amount\" class=\"text-danger\">\r\n          {{ formErrors.amount }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"billingRecordForm.value.recordType === 'ratebased'\">\r\n      <div class=\"form-group\">\r\n        <label for=\"rate\" class=\"col-sm-2 control-label\">Rate</label>\r\n        <div class=\"col-sm-10\">\r\n          <input ngModel #rate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"rate\" name=\"rate\" placeholder=\"e.g. 100.00\" required\r\n            pattern=\"^(\\d*\\.)?\\d+$\">\r\n          <span *ngIf=\"formErrors.rate\" class=\"text-danger\">\r\n            {{ formErrors.rate }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"quantity\" class=\"col-sm-2 control-label\">Quantity</label>\r\n        <div class=\"col-sm-10\">\r\n          <input ngModel #quantity=\"ngModel\" type=\"text\" class=\"form-control\" id=\"quantity\" name=\"quantity\" placeholder=\"e.g. 10\" required\r\n            pattern=\"^(\\d*\\.)?\\d+$\">\r\n          <span *ngIf=\"formErrors.quantity\" class=\"text-danger\">\r\n            {{ formErrors.quantity }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button [disabled]=\"!billingRecordForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/billing-record-form/billing-record-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingRecordFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillingRecordFormComponent = (function () {
    function BillingRecordFormComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'description': '',
            'rate': '',
            'quantity': '',
            'amount': ''
        };
        this.validationMessages = {
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
            }
        };
    }
    BillingRecordFormComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    BillingRecordFormComponent.prototype.getCompanies = function () {
        var _this = this;
        this.dataService.getRecords("company")
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    BillingRecordFormComponent.prototype.saveBillingRecord = function (billingRecordForm) {
        var _this = this;
        var endpoint = "billing-record/rate-based";
        if (billingRecordForm.value.recordType === "flatfee") {
            endpoint = "billing-record/flat-fee";
        }
        endpoint += "/" + billingRecordForm.value.client;
        delete (billingRecordForm.value.client);
        this.dataService.addRecord(endpoint, billingRecordForm.value)
            .subscribe(function (result) { return _this.successMessage = "Record added successfully"; }, function (error) { return _this.errorMessage = error; });
        this.billingRecordForm.reset();
    };
    BillingRecordFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    BillingRecordFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.billingRecordForm = this.currentForm;
        this.billingRecordForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    BillingRecordFormComponent.prototype.onValueChanged = function (data) {
        var form = this.billingRecordForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return BillingRecordFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('billingRecordForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], BillingRecordFormComponent.prototype, "currentForm", void 0);
BillingRecordFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-billing-record-form',
        template: __webpack_require__("../../../../../src/app/billing-record-form/billing-record-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/billing-record-form/billing-record-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* Location */]) === "function" && _d || Object])
], BillingRecordFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=billing-record-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/billing-record/billing-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/billing-record/billing-record.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"active\">Billing Records</li>\r\n  </ol>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <h2>Billing Records</h2>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/billing-record/add\">Add Billing Record</a>\r\n\r\n  <table class=\"table table-striped table-bordered\" id=\"dataTable\" style=\"width:100%\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Description</th>\r\n        <th>Client</th>\r\n        <th>Type</th>\r\n        <th>Created By</th>\r\n        <th>Total</th>\r\n        <!-- <th>Admin</th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let billingRecord of billingRecords\">\r\n        <td>{{billingRecord.id}}</td>\r\n        <td>{{billingRecord.description}}</td>\r\n        <td>{{billingRecord.client.name}}</td>\r\n        <td>{{(billingRecord.rate && billingRecord.quantity) ? \"Rate Based\" : \"Flat Fee\"}}</td>\r\n        <td>{{billingRecord.createdBy.username}}</td>\r\n        <td>{{billingRecord.total}}</td>\r\n        <!-- <td class=\"text-center\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/billing-record/edit/', billingRecord.id]\">Edit</a>&nbsp;\r\n          <button (click)=\"deleteBillingRecord(billingRecord.id)\" class=\"btn btn-danger\">Delete</button>\r\n        </td> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/billing-record/billing-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingRecordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingRecordComponent = (function () {
    function BillingRecordComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
    }
    BillingRecordComponent.prototype.ngOnInit = function () { this.getBillingRecords(); };
    BillingRecordComponent.prototype.getBillingRecords = function () {
        var _this = this;
        this.dataService.getRecords("billing-record")
            .subscribe(function (results) { return _this.billingRecords = results; }, function (error) { return _this.errorMessage = error; });
    };
    return BillingRecordComponent;
}());
BillingRecordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-billing-record',
        template: __webpack_require__("../../../../../src/app/billing-record/billing-record.component.html"),
        styles: [__webpack_require__("../../../../../src/app/billing-record/billing-record.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]) === "function" && _b || Object])
], BillingRecordComponent);

var _a, _b;
//# sourceMappingURL=billing-record.component.js.map

/***/ }),

/***/ "../../../../../src/app/company-form/company-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-form/company-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/home\">Home</a></li>\r\n      <li><a routerLink=\"/company\">Companies</a></li>\r\n      <li class=\"active\">Manage Company</li>\r\n  </ol>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/company\">Return to Companies</a>\r\n\r\n  <h1>Manage Companies</h1>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <form novalidate (ngSubmit)=\"saveCompany(companyForm)\"  #companyForm=\"ngForm\" class=\"form-horizontal\">\r\n    <input [ngModel]=\"company?.id\" ngModel #company_id=\"ngModel\" type=\"hidden\" name=\"id\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"col-sm-2 control-label\">Company Name</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [ngModel]=\"company?.name\" ngModel #name=\"ngModel\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Company Name\" required minlength=\"2\" maxlength=\"30\">\r\n         <span *ngIf=\"formErrors.name\" class=\"text-danger\">\r\n          {{ formErrors.name }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n     <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button [disabled]=\"!companyForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/company-form/company-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyFormComponent = (function () {
    function CompanyFormComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'name': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Company name is required.',
                'minlength': 'Company name must be at least 2 characters long.',
                'maxlength': 'Company name cannot be more than 30 characters long.'
            }
        };
    }
    CompanyFormComponent.prototype.getRecordForEdit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dataService.getRecord("company", +params['id']); })
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            (+params['id']) ? _this.getRecordForEdit() : null;
        });
    };
    CompanyFormComponent.prototype.saveCompany = function (companyForm) {
        var _this = this;
        if (typeof companyForm.value.id === "number") {
            this.dataService.editRecord("company", companyForm.value, companyForm.value.id)
                .subscribe(function (company) { return _this.successMessage = "Record updated successfully"; }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.dataService.addRecord("company", companyForm.value)
                .subscribe(function (company) { return _this.successMessage = "Record added successfully"; }, function (error) { return _this.errorMessage = error; });
            this.company = {};
            this.companyForm.reset();
        }
    };
    CompanyFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    CompanyFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.companyForm = this.currentForm;
        this.companyForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    CompanyFormComponent.prototype.onValueChanged = function (data) {
        var form = this.companyForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return CompanyFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('companyForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CompanyFormComponent.prototype, "currentForm", void 0);
CompanyFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-company-form',
        template: __webpack_require__("../../../../../src/app/company-form/company-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company-form/company-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _d || Object])
], CompanyFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=company-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"active\">Companies</li>\r\n  </ol>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <h2>Companies</h2>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/company/add\">Add Company</a>\r\n\r\n  <table class=\"table table-striped table-bordered\" id=\"dataTable\" style=\"width:100%\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Admin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let company of companies\">\r\n        <td>{{company.id}}</td>\r\n        <td>{{company.name}}</td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/company/edit/', company.id]\">Edit</a>&nbsp;\r\n          <button (click)=\"deleteCompany(company.id)\" class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delete_confirm_delete_confirm_component__ = __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyComponent = (function () {
    function CompanyComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
    }
    CompanyComponent.prototype.ngOnInit = function () { this.getCompanies(); };
    CompanyComponent.prototype.getCompanies = function () {
        var _this = this;
        this.dataService.getRecords("company")
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    CompanyComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.deleteRecord("company", id)
                    .subscribe(function (company) { _this.successMessage = "Record(s) deleted succesfully"; _this.getCompanies(); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/company.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]) === "function" && _b || Object])
], CompanyComponent);

var _a, _b;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand__ = __webpack_require__("../../../../rxjs/add/operator/expand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_expand__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'https://api-invoicify-phase2.herokuapp.com/api/';
        this.found = false;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ withCredentials: true });
    }
    DataService.prototype.getRecords = function (endpoint) {
        var apiUrl = this.baseUrl + endpoint;
        return this.http.get(apiUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getRecord = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        return this.http.get(apiUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.deleteRecord = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint;
        apiUrl = (id) ? apiUrl + "/" + id : apiUrl;
        return this.http.delete(apiUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.editRecord = function (endpoint, record, id) {
        var apiUrl = "" + this.baseUrl + endpoint;
        apiUrl = (id) ? apiUrl + "/" + id : apiUrl;
        return this.http.put(apiUrl, record, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.addRecord = function (endpoint, record) {
        var apiUrl = "" + this.baseUrl + endpoint;
        return this.http.post(apiUrl, record, this.options)
            .map(this.extractData);
    };
    DataService.prototype.extractData = function (res) {
        var results = res.json();
        return results || [];
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (typeof error._body === "string") {
            try {
                errMsg = JSON.parse(error._body).message;
                if (errMsg.includes("ConstraintViolationException")) {
                    errMsg = "Cannot delete record because it has related to other records.";
                }
            }
            catch (error) {
                errMsg = error._body;
            }
        }
        else {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
                if (error.status === 0) {
                    errMsg = "Error connecting to API";
                }
                else {
                    var errorJSON = error.json();
                    errMsg = errorJSON.message;
                }
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Record</h2>\r\n<mat-dialog-content>Are you sure?</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteConfirmComponent = (function () {
    function DeleteConfirmComponent() {
    }
    DeleteConfirmComponent.prototype.ngOnInit = function () {
    };
    return DeleteConfirmComponent;
}());
DeleteConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-delete-confirm',
        template: __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DeleteConfirmComponent);

//# sourceMappingURL=delete-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\" height=\"500px\">\r\n      <div class=\"item active\">\r\n        <img src=\"https://www.ally.com/resources/pres/micro-sites/dealer-brand/images/leadership/hero_image_1152.jpg\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Some Tag Line</h3>\r\n          <p>Because tag lines</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"https://www.ally.com/resources/pres/micro-sites/dealer-brand/images/leadership/hero_image_1152.jpg\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Marketing Mumbo Jumo</h3>\r\n          <p>Because marketing is awesome</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <img src=\"https://www.ally.com/resources/pres/micro-sites/dealer-brand/images/leadership/hero_image_1152.jpg\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Another Image</h3>\r\n          <p>Because that's the point</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n\r\n\r\n      <!-- START THE FEATURETTES -->\r\n\r\n      <hr>\r\n\r\n      <div class=\"row featurette\">\r\n        <div class=\"col-md-7\">\r\n          <h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It'll blow your mind.</span></h2>\r\n          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <img src=\"http://gatewaysat.com/wp-content/uploads/2015/02/college-icon-300x300.png\" alt=\"Generic placeholder image\">\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 col-md-push-5\">\r\n          <h2 class=\"featurette-heading\">Oh yeah, it's that good. <span class=\"text-muted\">See for yourself.</span></h2>\r\n          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\r\n        </div>\r\n        <div class=\"col-md-5 col-md-pull-7\">\r\n          <img src=\"https://www.collegeraptor.com/wp/wp-content/uploads/2016/07/Minors-300x300.png\" alt=\"Generic placeholder image\">\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7\">\r\n          <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\r\n          <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <img src=\"http://knavigators.com/wp-content/uploads/2016/07/college_admissions_counseling_qa-300x300.jpg\" alt=\"Generic placeholder image\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- /END THE FEATURETTES -->\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in_animation__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice-form/invoice-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice-form/invoice-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n    <li>\r\n      <a routerLink=\"/home\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/invoice\">Invoices</a>\r\n    </li>\r\n    <li class=\"active\">Manage Invoice</li>\r\n  </ol>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/invoice\">Return to Invoices</a>\r\n\r\n  <h1>Manage Invoice</h1>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <form (ngSubmit)=\"saveInvoice(invoiceForm)\" #invoiceForm=\"ngForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label for=\"client\" class=\"col-sm-2 control-label\">Client</label>\r\n      <div class=\"col-sm-10\">\r\n        <select required [ngModel]=\"null\" ngModel #client=\"ngModel\" class=\"form-control\" id=\"client\" name=\"client\">\r\n          <option [ngValue]=\"null\">-- Select Client --</option>\r\n          <option *ngFor=\"let company of companies\" [ngValue]=\"company.id\">\r\n            {{ company.name }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"invoiceDescription\" class=\"col-sm-2 control-label\">Invoice Description</label>\r\n      <div class=\"col-sm-10\">\r\n        <input ngModel #invoiceDescription=\"ngModel\" type=\"text\" class=\"form-control\" id=\"invoiceDescription\" name=\"invoiceDescription\"\r\n          placeholder=\"Description\" required minlength=\"5\" maxlength=\"30\">\r\n        <span *ngIf=\"formErrors.invoiceDescription\" class=\"text-danger\">\r\n          {{ formErrors.invoiceDescription }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"client\" class=\"col-sm-2 control-label\">Client</label>\r\n      <div class=\"col-sm-10\">\r\n        <select multiple required ngModel #client=\"ngModel\" class=\"form-control\" id=\"recordIds\" name=\"recordIds\">\r\n          <option *ngFor=\"let billingRecord of billingRecords\" [ngValue]=\"billingRecord.id\">\r\n            {{ billingRecord.client.name }} - {{billingRecord.description}} - {{billingRecord.total}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button [disabled]=\"!invoiceForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/invoice-form/invoice-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceFormComponent = (function () {
    function InvoiceFormComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'invoiceDescription': ''
        };
        this.validationMessages = {
            'invoiceDescription': {
                'required': 'Description name is required.',
                'minlength': 'Description name must be at least 5 characters long.',
                'maxlength': 'Description name cannot be more than 30 characters long.'
            }
        };
    }
    InvoiceFormComponent.prototype.ngOnInit = function () {
        this.getBillingRecords();
        this.getCompanies();
    };
    InvoiceFormComponent.prototype.getBillingRecords = function () {
        var _this = this;
        this.dataService.getRecords("billing-record")
            .subscribe(function (results) { return _this.billingRecords = results; }, function (error) { return _this.errorMessage = error; });
    };
    InvoiceFormComponent.prototype.getCompanies = function () {
        var _this = this;
        this.dataService.getRecords("company")
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    InvoiceFormComponent.prototype.saveInvoice = function (invoiceForm) {
        var _this = this;
        var endpoint = "invoice/" + invoiceForm.value.client;
        delete (invoiceForm.value.client);
        this.dataService.addRecord(endpoint, invoiceForm.value)
            .subscribe(function (company) { return _this.successMessage = "Record added successfully"; }, function (error) { return _this.errorMessage = error; });
        this.invoiceForm.reset();
    };
    InvoiceFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    InvoiceFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.invoiceForm = this.currentForm;
        this.invoiceForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    InvoiceFormComponent.prototype.onValueChanged = function (data) {
        var form = this.invoiceForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return InvoiceFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('invoiceForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], InvoiceFormComponent.prototype, "currentForm", void 0);
InvoiceFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-invoice-form',
        template: __webpack_require__("../../../../../src/app/invoice-form/invoice-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice-form/invoice-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _d || Object])
], InvoiceFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=invoice-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice/invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n    <ol class=\"breadcrumb\">\r\n        <li><a routerLink=\"/home\">Home</a></li>\r\n        <li class=\"active\">Invoices</li>\r\n    </ol>\r\n  \r\n    <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n  \r\n    <h2>Manage Invoices</h2>\r\n  \r\n    <a class=\"btn btn-primary\" routerLink=\"/invoice/add\">Add Invoice</a>\r\n  \r\n    <table class=\"table table-striped table-bordered\" id=\"dataTable\" style=\"width:100%\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Description</th>\r\n          <th>Client</th>\r\n          <th>Line Items</th>\r\n          <th>Created By</th>\r\n          <th>Created On</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let invoice of invoices\">\r\n          <td>{{invoice.id}}</td>\r\n          <td>{{invoice.invoiceDescription}}</td>\r\n          <td>{{invoice.company.name}}</td>\r\n          <td>{{invoice.lineItems.length}}</td>\r\n          <td>{{invoice.createdBy.username}}</td>\r\n          <td>{{invoice.createdOn}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </section>\r\n  "

/***/ }),

/***/ "../../../../../src/app/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceComponent = (function () {
    function InvoiceComponent(dataService) {
        this.dataService = dataService;
    }
    InvoiceComponent.prototype.ngOnInit = function () { this.getInvoices(); };
    InvoiceComponent.prototype.getInvoices = function () {
        var _this = this;
        this.dataService.getRecords("invoice")
            .subscribe(function (results) { return _this.invoices = results; }, function (error) { return _this.errorMessage = error; });
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-invoice',
        template: __webpack_require__("../../../../../src/app/invoice/invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice/invoice.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], InvoiceComponent);

var _a;
//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/home\">\r\n                <img width=\"100\" alt=\"Invoicify - HR\" src=\"assets/images/ally_logo.png\" />\r\n            </a>\r\n        </div>\r\n         <!--/.nav-collapse -->\r\n         <form class=\"navbar-form navbar-right\" (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!authService.isAuthenticated()\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" ngModel #username=\"ngModel\" class=\"form-control\" placeholder=\"Username\" name=\"username\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" ngModel #passowrd=\"ngModel\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required>\r\n            </div>\r\n            <button [disabled]=\"!loginForm.form.valid\" type=\"submit\" class=\"btn btn-success\">Login</button>\r\n        </form>\r\n        <div class=\"navbar-text navbar-right\" *ngIf=\"authService.isAuthenticated()\">\r\n            Signed in as: <a [routerLink]=\"['/user/edit/', auth_user.id]\">{{auth_user.username}}</a> (<a (click)=\"logout()\">Logout</a>)\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/home\">Home</a>\r\n                </li>\r\n                <li *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/company\">Companies</a>\r\n                </li>\r\n                <li *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/billing-record\">Billing Records</a>\r\n                </li>\r\n                <li *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n                        <a routerLink=\"/invoice\">Invoices</a>\r\n                    </li>\r\n                <li *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n                    <a routerLink=\"/user\">Users</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.refreshUser();
    };
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (success) {
            _this.refreshUser();
            _this.router.navigate(["home"]);
        });
    };
    NavigationComponent.prototype.login = function (user) {
        var _this = this;
        this.authService.login(user.value).subscribe(function (success) {
            _this.refreshUser();
        }, function (error) {
            _this.errorMessage = "Invalid login";
        });
    };
    NavigationComponent.prototype.refreshUser = function () {
        this.auth_user = JSON.parse(localStorage.getItem("auth_user"));
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_form_company_form_component__ = __webpack_require__("../../../../../src/app/company-form/company-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__billing_record_billing_record_component__ = __webpack_require__("../../../../../src/app/billing-record/billing-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__billing_record_form_billing_record_form_component__ = __webpack_require__("../../../../../src/app/billing-record-form/billing-record-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoice_form_invoice_form_component__ = __webpack_require__("../../../../../src/app/invoice-form/invoice-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_component__ = __webpack_require__("../../../../../src/app/invoice/invoice.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_3__company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'company/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__company_form_company_form_component__["a" /* CompanyFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'company/add', component: __WEBPACK_IMPORTED_MODULE_4__company_form_company_form_component__["a" /* CompanyFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__user_form_user_form_component__["a" /* UserFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/add', component: __WEBPACK_IMPORTED_MODULE_7__user_form_user_form_component__["a" /* UserFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'billing-record', component: __WEBPACK_IMPORTED_MODULE_8__billing_record_billing_record_component__["a" /* BillingRecordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'billing-record/add', component: __WEBPACK_IMPORTED_MODULE_9__billing_record_form_billing_record_form_component__["a" /* BillingRecordFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'invoice/add', component: __WEBPACK_IMPORTED_MODULE_10__invoice_form_invoice_form_component__["a" /* InvoiceFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\">\r\n    {{errorMessage}} {{successMessage}}\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusMessageComponent = (function () {
    function StatusMessageComponent() {
    }
    StatusMessageComponent.prototype.ngOnInit = function () {
    };
    return StatusMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], StatusMessageComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], StatusMessageComponent.prototype, "successMessage", void 0);
StatusMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-status-message',
        template: __webpack_require__("../../../../../src/app/status-message/status-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-message/status-message.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusMessageComponent);

//# sourceMappingURL=status-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n    <li>\r\n      <a routerLink=\"/home\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/user\">Users</a>\r\n    </li>\r\n    <li class=\"active\">Manage User</li>\r\n  </ol>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/user\">Return to Users</a>\r\n\r\n  <h1>Manage User</h1>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <form novalidate (ngSubmit)=\"saveUser(userForm)\" #userForm=\"ngForm\" class=\"form-horizontal\">\r\n    <input [ngModel]=\"user?.id\" ngModel #userId=\"ngModel\" type=\"hidden\" name=\"id\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"col-sm-2 control-label\">Username</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [ngModel]=\"user?.username\" ngModel #userName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\r\n          placeholder=\"Username\" required minlength=\"5\" maxlength=\"30\">\r\n        <span *ngIf=\"formErrors.username\" class=\"text-danger\">\r\n          {{ formErrors.username }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"col-sm-2 control-label\">Password</label>\r\n      <div class=\"col-sm-10\">\r\n        <input ngModel #password=\"ngModel\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\r\n          placeholder=\"Password\" minlength=\"8\" pattern=\"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$\">\r\n        <span *ngIf=\"formErrors.password\" class=\"text-danger\">\r\n          {{ formErrors.password }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button [disabled]=\"!userForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFormComponent = (function () {
    function UserFormComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.',
                'minlength': 'Username must be at least 5 characters long.',
                'maxlength': 'Company name cannot be more than 30 characters long.'
            },
            'password': {
                'pattern': 'Password must be at least one upper case letter, at least one lower case English letter, at least one digit, at least one special character, and 8 characters in length',
                'minlength': ''
            }
        };
    }
    UserFormComponent.prototype.getRecordForEdit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dataService.getRecord("user", +params['id']); })
            .subscribe(function (result) { return _this.user = result; });
    };
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            (+params['id']) ? _this.getRecordForEdit() : null;
        });
    };
    UserFormComponent.prototype.saveUser = function (userForm) {
        var _this = this;
        if (userForm.value.password === "") {
            delete (userForm.value.password);
        }
        if (typeof userForm.value.id === "number") {
            this.dataService.editRecord("user", userForm.value, userForm.value.id)
                .subscribe(function (company) { return _this.successMessage = "Record updated successfully"; }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.dataService.addRecord("user", userForm.value)
                .subscribe(function (result) { return _this.successMessage = "Record added successfully"; }, function (error) { return _this.errorMessage = error; });
            this.user = {};
            this.userForm.reset();
        }
    };
    UserFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    UserFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.userForm = this.currentForm;
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    UserFormComponent.prototype.onValueChanged = function (data) {
        var form = this.userForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return UserFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('userForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], UserFormComponent.prototype, "currentForm", void 0);
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__("../../../../../src/app/user-form/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-form/user-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\r\n  <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"active\">Users</li>\r\n  </ol>\r\n\r\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\r\n\r\n  <h2>Users</h2>\r\n\r\n  <a class=\"btn btn-primary\" routerLink=\"/user/add\">Add User</a>\r\n\r\n  <table class=\"table table-striped table-bordered\" id=\"dataTable\" style=\"width:100%\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>username</th>\r\n        <th>Admin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.username}}</td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/user/edit/', user.id]\">Edit</a>&nbsp;\r\n          <!-- <button (click)=\"deleteUser(user.id)\" class=\"btn btn-danger\">Delete</button> -->\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delete_confirm_delete_confirm_component__ = __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
    }
    UserComponent.prototype.ngOnInit = function () { this.getUsers(); };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getRecords("user")
            .subscribe(function (results) { return _this.users = results; }, function (error) { return _this.errorMessage = error; });
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.deleteRecord("user", id)
                    .subscribe(function (company) { _this.successMessage = "Record(s) deleted succesfully"; _this.getUsers(); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
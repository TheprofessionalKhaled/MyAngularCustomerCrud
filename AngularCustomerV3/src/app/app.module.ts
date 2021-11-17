import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { CustomerDataComponent } from './components/customer-data/customer-data.component';
import { CustomerComplaintsComponent } from './components/customer-complaints/customer-complaints.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddComplaintsComponent } from './components/add-complaints/add-complaints.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaCallbackComponent,
  OktaAuthModule,
  OktaAuthGuard
}from '@okta/okta-angular';
import myAppConfig from './configs/my-app-config';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Interceptor } from './config/interceptor';


const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);


 
const routes: Routes = [
  {path: 'login/callback', component: OktaCallbackComponent},

  { path: 'login', component: LoginComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'add-complaint', component: AddComplaintsComponent },

  { path: 'list-customer', component: CustomerDataComponent },
  { path: 'list-complaint', component: CustomerComplaintsComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  {path: '', redirectTo: '/list-customer', pathMatch: 'full'},
  {path: '**', redirectTo: '/list-customer', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginStatusComponent,
    CustomerDataComponent,
    
    CustomerComplaintsComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AddComplaintsComponent
  ],

  imports: [
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    OktaAuthModule
  ],
  providers:[ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true},{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})

export class AppModule { }



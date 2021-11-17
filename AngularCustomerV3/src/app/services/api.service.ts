import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl : string = 'http://localhost:8080/users/';

  login(loginPayload) : Observable<Object> {
    return this.http.post<Object>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getCustomers() : Observable<Object>{
    return this.http.get<Object>(this.baseUrl);
  }
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.http.post<Object>(this.baseUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<Object> {
    return this.http.put<Object>(this.baseUrl + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
